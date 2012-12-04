
exports = module.exports = excerpt;

function excerpt(text, phrase, radius, ending) {
  var append, prepend, phraseLen, pos, startPos, endPos, excerpt, textLen;
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

  excerpt = text.substr(startPos, endPos - startPos);
  excerpt = prepend + excerpt + append;

  return excerpt;
}
