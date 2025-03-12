<script>
    export let questions = [];
  
    let correct = 0;
    let numAnswered = 0;
    const MAX_QUESTIONS = questions.length;
    let showFeedback = false;
  
    function handleAnswer(userSaysMalicious) {
        if (numAnswered < MAX_QUESTIONS) {
            if (userSaysMalicious === !questions[numAnswered].malicious) {
                correct++;
            }
            numAnswered++;
            showFeedback = true;
        }
    }
  
    function next() {
        if (numAnswered >= MAX_QUESTIONS) {
            localStorage.setItem('correct', correct);
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
    {#if numAnswered < MAX_QUESTIONS}
        <p>{questions[numAnswered].redFlag}</p>
    {:else}
        <p>No more questions.</p>
    {/if}
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
