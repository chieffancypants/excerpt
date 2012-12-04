
# excerpt

Based on Ruby on Rails TextHelper.

Extracts an excerpt from `text` that matches the first instance of `phrase`. The `radius` option expands the excerpt on each side of the first occurrence of `phrase` by the number of characters defined in `radius` (which defaults to 100). If the excerpt radius overflows the beginning or end of the text, then the `ending` option (which defaults to “…”) will be prepended/appended accordingly. If the phrase isn’t found, the original text is returned.

```
> excerpt('This is an example', 'an', 5);
'...s is an exam...'
```

## Installation

```
$ npm install excerpt
$ component install component/excerpt
```

## API
 
### excerpt(text, phrase, radius, ending)
should extract the excerpt of text

```js
excerpt(example, 'an', 5).should.equal('...s is an exam...');
excerpt(example, 'is', 5).should.equal('This is a...');
excerpt('This is also an example', 'an', 8, '<chop> ').should.equal('<chop> is also an example');

```

## License 

(The MIT License)

Copyright (c) 2012 Wes Cruver &lt;chieffancypants@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.