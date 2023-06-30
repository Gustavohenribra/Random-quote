$(document).ready(function() {
    const quoteText = $(".quote");
    const authorName = $(".author .name");
    const quoteBtn = $("button");
    const soundBtn = $(".sound");
    const copyBtn = $(".copy");
    const twitterBtn = $(".twitter");
  
    function randomQuote() {
      quoteBtn.addClass("loading");
      quoteBtn.text("Loading Quote...");
      $.getJSON("https://api.quotable.io/random", function(result) {
        quoteText.text(result.content);
        authorName.text(result.author);
        quoteBtn.text("New Quote");
        quoteBtn.removeClass("loading");
      });
    }
  
    soundBtn.on("click", function() {
      let utterance = new SpeechSynthesisUtterance(`${quoteText.text()} by ${authorName.text()}`);
      speechSynthesis.speak(utterance);
    });
  
    copyBtn.on("click", function() {
      navigator.clipboard.writeText(quoteText.text());
    });
  
    twitterBtn.on("click", function() {
      let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.text()}`;
      window.open(tweetUrl, "_blank");
    });
  
    quoteBtn.on("click", randomQuote);
  });
  
