document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('markdown-input');
    const previewOutput = document.getElementById('preview-output');
  
    // Event listener for real-time Markdown rendering
    textarea.addEventListener('input', function() {
      const markdownText = textarea.value;
      // Check if marked.js is loaded
      if (typeof marked !== 'undefined') {
        previewOutput.innerHTML = marked(markdownText);
      } else {
        console.error('Marked.js not loaded!');
      }
    });
  });
  