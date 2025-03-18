<script lang="ts">
    import { onMount } from "svelte";
    import { generateQuestions } from "../logic/emailSelection";
    import EmailCard from "./Email.svelte"; 

    let questions: any[] = [];

    let redFlags: any = {};
    let correct = 0;
    let numAnswered = 0;
    let maxQuestions = 10; 
    let showFeedback = false;
    let loading = true;

    onMount(() => {
        const storedRedFlags = localStorage.getItem("redFlags");
        redFlags = storedRedFlags ? JSON.parse(storedRedFlags) : {};

        questions = generateQuestions(redFlags);

        loading = false;
    });

    function handleAnswer(userSaysMalicious: boolean) {
        if (numAnswered < maxQuestions) {
            if (userSaysMalicious === questions[numAnswered].malicious) {
                correct++;
                for (const flag of questions[numAnswered].redFlags) {
                    if (!redFlags[flag]) redFlags[flag] = [0, 0];
                    redFlags[flag][0]++; // Increment correct answers count.
                    redFlags[flag][1]++; // Increment total questions count.
                }
            } else {
                for (const flag of questions[numAnswered].redFlags) {
                    if (!redFlags[flag]) redFlags[flag] = [0, 0];
                    redFlags[flag][1]++; // Only increment total questions count.
                }
            }

            // Save updated stats back to localStorage.
            localStorage.setItem("redFlags", JSON.stringify(redFlags));
            showFeedback = true;
        }
    }

    function next() {
        numAnswered++;
        if (numAnswered >= maxQuestions) {
            localStorage.setItem("correct", correct.toString());
            window.location.href = "/dashboard";
        } else {
            showFeedback = false;
        }
    }
</script>

{#if loading}
    <p class="score-display">Loading questions...</p>
{:else}
    <div class="score-display">
        {#if showFeedback}
            <p>Score: {correct} / {numAnswered + 1}</p>
        {:else}
            <p>Score: {correct} / {numAnswered}</p>
        {/if}
    </div>

    <div id="email-container">
        {#key numAnswered}{#key showFeedback}
            <EmailCard content={questions[numAnswered].content} showfeedback={showFeedback}/>
        {/key}{/key}
    </div>

    {#if showFeedback}
        <div class="feedback">
            <p>{questions[numAnswered].tipsForImprovement}</p>
            <p>{questions[numAnswered].explanationSummary}</p>

            <button 
                on:click={next}
                class="btn {numAnswered >= maxQuestions - 1 ? 'btn-success' : 'btn-secondary'} mt-2">
                {numAnswered >= maxQuestions - 1 ? 'Go to Dashboard' : 'Next'}
            </button>
        </div>
    {:else}
        <div class="button-container">
            <button on:click={() => handleAnswer(false)} class="btn btn-primary">Safe</button>
            <button on:click={() => handleAnswer(true)} class="btn btn-danger">Not Safe</button>
        </div>
    {/if}
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
