export function getProvider() {
  return {
    getSuggestionForWord(
      textEditor: TextEditor,
      text: string,
      range: Range
    ): ?HyperclickSuggestion {
      return {
        // The range(s) to underline as a visual cue for clicking.
        range,
        // The function to call when the underlined text is clicked.
        callback() {},
      };
    },
  };
}
