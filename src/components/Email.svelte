<script lang="ts">
    export let content: {
        sender: string;
        subject: string;
        body: string;
        highlightTags?: Array<{ text: string; explanation: string }>;
    };

    // Destructure content.
    const { sender, subject, body, highlightTags } = content;

    export let showfeedback = true;

    let highlightedBody: string = body;

    if (showfeedback && highlightTags) {
        highlightTags.forEach((tag, i) => {
            console.log(tag.text);
            highlightedBody = highlightedBody.replace(
                tag.text,
                `<span class="highlight">${tag.text}<span class="tooltip2">${tag.explanation}</span></span>`
            );
        });
    }
    // Format today's date.
    const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    // Extract sender's name (everything before the '<' character).
    const senderName = sender.substring(0, sender.indexOf("<"));

    // // Determine which body to show. If malicious and highlightTags exist, then highlight the text.
    // let highlightedBody: string = body;
    // if (malicious && highlightTags && highlightTags.length > 0) {
    //     console.log("TEST");
    //     highlightTags.forEach((tag) => {
    //         highlightedBody = highlightedBody.replace(
    //             tag.text,
    //             `<span class="highlight bg-red-100">${tag.text}<span class="tooltip">${tag.explanation}</span></span>`
    //         );
    //     });
    // }

    // Control whether the email details are expanded.
    let expanded = false;
</script>

<div class="email-container">
    <div class="email-card">
        <!-- Email Header: toggles expanded state on click -->
        <div class="email-header" role="button" tabindex="0" on:click={() => (expanded = !expanded)} on:keydown={(e) => e.key === 'Enter' && (expanded = !expanded)}>
            <div class="sender-info">
                <span class="sender-name">{senderName}</span>
                <span class="arrow" class:rotated={expanded}>&#9660;</span>
            </div>
            <div class="email-subject">{@html subject}</div>
            
        </div>

        <!-- Collapsible Email Details -->
        {#if expanded}
            <div class="email-details">
                <p><strong>From:</strong> {sender}</p>
                <p><strong>Subject:</strong> {@html subject}</p>
                <p><strong>Date:</strong> {today}</p>
            </div>
        {/if}

        <!-- Email Body with Highlighting -->
        {#if !showfeedback}
        <div class="email-content" id="email-body">
            {@html body} </div>
        {/if}

        <!-- Feedback -->
        {#if showfeedback}
        <div class="email-content" id="email-body">
            {@html highlightedBody}  </div>
        {/if}

        
    </div>
</div>

<style>
    /* Email Container */
    .email-container {
        display: flex;
        justify-content: center;
        margin: 20px;
    }

    /* Email Card */
    .email-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 16px;
        max-width: 600px;
        border: 1px solid #ddd;
        cursor: pointer;
        font-family: Arial, sans-serif;
        transition: box-shadow 0.3s;
    }

    .email-card:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    /* Header */
    .email-header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .sender-info {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .sender-name {
        font-weight: bold;
    }

    .arrow {
        font-size: 13px;
        transition: transform 0.2s;
    }

    .arrow.rotated {
        transform: rotate(180deg);
    }

    .email-subject {
        font-size: 14px;
        color: #444;
        margin-top: 4px;
    }

    /* Collapsible Section */
    .email-details {
        background: #f9f9f9;
        padding: 10px;
        border-radius: 8px;
        margin-top: 8px;
        font-size: 14px;
    }

    /* Email Body */
    .email-content {
        margin-top: 10px;
        font-size: 14px;
    }
    :global(.highlight) {
      background-color: rgba(252, 165, 165, 0.3);
      padding: 2px 4px;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
  }
  
  :global(.tooltip2) {
      display: none;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #374151;
      color: white;
      font-size: 15px;
      text-align: center;
      border-radius: 6px;
      padding: 5px 10px;
      z-index: 1;
      width: 220px;
      margin-bottom: 5px;
  }
  
  :global(.highlight:hover .tooltip2) {
      display: block;
  }
</style>
