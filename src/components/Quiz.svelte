<script lang="ts">
    import { onMount } from "svelte";
  
    export let questions: any[] = [];
  
    let redFlags: any = {};
    let correct = 0;
    let numAnswered = 0;
    const MAX_QUESTIONS = questions.length;
    let showFeedback = false;
  
    onMount(() => {
      const storedRedFlags = localStorage.getItem("redFlags");
      redFlags = storedRedFlags ? JSON.parse(storedRedFlags) : {};
    });
  
    function handleAnswer(userSaysMalicious: boolean) {
        if (numAnswered < MAX_QUESTIONS) {
            if (userSaysMalicious === questions[numAnswered].malicious) {
                correct++;

                for (const flag of questions[numAnswered].redFlags) {
                    if (!redFlags[flag]) redFlags[flag] = [0, 0];
                    redFlags[flag][0]++; 
                    redFlags[flag][1]++; 
                }
            } else {
                for (const flag of questions[numAnswered].redFlags) {
                    if (!redFlags[flag]) redFlags[flag] = [0, 0];
                    redFlags[flag][1]++; 
                }
            }
            localStorage.setItem("redFlags", JSON.stringify(redFlags))

            numAnswered++;
            showFeedback = true;

        }
    }
  
    function next() {
        if (numAnswered >= MAX_QUESTIONS) {
            localStorage.setItem('correct', correct.toString())
            window.location.href = "/dashboard";
        } else {
            showFeedback = false;
        }
    }
</script>

<div class="score-display">
    <p>Score: {correct} / {numAnswered}</p>
</div>

<div id="email-container">
    <p>Sample email content goes here.</p>
</div>

{#if showFeedback}
    <div class="feedback">
        <p>{questions[numAnswered - 1].feedback}</p>
        <button 
            on:click={next}
            class="btn {numAnswered >= MAX_QUESTIONS ? 'btn-success' : 'btn-secondary'} mt-2">
            {numAnswered >= MAX_QUESTIONS ? 'Go to Dashboard' : 'Next'}
        </button>
    </div>
{:else}
    <div class="button-container">
        <button on:click={() => handleAnswer(false)} class="btn btn-primary">Safe</button>
        <button on:click={() => handleAnswer(true)} class="btn btn-danger">Not Safe</button>
    </div>
{/if}

<style>
    #email-container,
    .button-container,
    .feedback,
    .score-display {
        max-width: 700px;
        margin: 20px auto;
        text-align: center;
    }
</style>
