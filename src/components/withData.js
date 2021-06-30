// pjm - this is a HOC abstraction - takes a component and builds on it (eg filters data for it)
// used in the pages/speakers API
function withData(maxSpeakersToShow) {
    return function (Component) {
      const speakers = [
        { imageSrc: "speaker-1124", name: "Douglas Crockford" },
        { imageSrc: "speaker-1530", name: "Tamara Baker" },
        { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
      ];
  
      return function () {
        const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
        return <Component speakers={limitSpeakers}></Component>;
      };
    };
  }
  
  export default withData;
  