
(function() {

  // Allow this to be used with node or the browser:
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = excerpt;
    }
    exports.excerpt = excerpt;
  } else {
    this.excerpt = excerpt;
  }

  function excerpt(text, phrase, radius, ending) {
    var append, prepend, phraseLen, pos, startPos, endPos, excerptText, textLen;
    if (!text || !phrase) {
      return text;
    }

    radius = radius || '100';
    ending = ending || '...';

    append = prepend = ending;
    phraseLen = phrase.length;
    textLen = text.length;

    pos = text.toLowerCase().indexOf(phrase.toLowerCase());
    if (pos === false) {
      return text.substr(0, radius) + ending;
    }

    startPos = pos - radius;
    if (startPos <= 0) {
      startPos = 0;
      prepend = '';
    }

    endPos = pos + phraseLen + radius;
    if (endPos >= textLen) {
      endPos = textLen;
      append = '';
    }

    excerptText = text.substr(startPos, endPos - startPos);
    excerptText = prepend + excerptText + append;

    return excerptText;
  }


}).call(this);
