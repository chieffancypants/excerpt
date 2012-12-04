
var excerpt = require('..');

var example = 'This is an example';

describe('excerpt(str)', function() {
  it('should extract the excerpt', function() {
    excerpt(example, 'an', 5).should.equal('...s is an exam...');
    excerpt(example, 'is', 5).should.equal('This is a...');
    excerpt(example, 'is').should.equal('This is an example');
    excerpt('This next thing is an example', 'ex', 2).should.equal('... next ...');
    excerpt('This is also an example', 'an', 8, '<chop> ').should.equal('<chop> is also an example');
  });
});