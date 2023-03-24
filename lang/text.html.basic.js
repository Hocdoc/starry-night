// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom/language-html>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.hta', '.htm', '.html.hl', '.kit', '.mtml', '.xht', '.xhtml'],
  names: ['html', 'kit', 'mtml', 'xhtml'],
  patterns: [
    {
      begin: '(<\\?)(xml)',
      captures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.xml.html'}
      },
      end: '(\\?>)',
      name: 'meta.tag.preprocessor.xml.html',
      patterns: [
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'}
      ]
    },
    {
      begin: '<!--',
      captures: {0: {name: 'punctuation.definition.comment.html'}},
      end: '--\\s*>',
      name: 'comment.block.html',
      patterns: [
        {
          match: '--(?!-*\\s*>)',
          name: 'invalid.illegal.bad-comments-or-CDATA.html'
        },
        {include: '#embedded-code'}
      ]
    },
    {
      begin: '<!',
      captures: {0: {name: 'punctuation.definition.tag.html'}},
      end: '>',
      name: 'meta.tag.sgml.html',
      patterns: [
        {
          begin: '(?i:DOCTYPE)',
          captures: {1: {name: 'entity.name.tag.doctype.html'}},
          end: '(?=>)',
          name: 'meta.tag.sgml.doctype.html',
          patterns: [
            {
              match: '"[^">]*"',
              name: 'string.quoted.double.doctype.identifiers-and-DTDs.html'
            }
          ]
        },
        {
          begin: '\\[CDATA\\[',
          end: ']](?=>)',
          name: 'constant.other.inline-data.html'
        },
        {
          match: '(\\s*)(?!--|>)\\S(\\s*)',
          name: 'invalid.illegal.bad-comments-or-CDATA.html'
        }
      ]
    },
    {include: '#embedded-code'},
    {
      begin: '(?i)(?=<style(\\s+|>))',
      end: '(?i)(</)(style)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      name: 'meta.tag.style.html',
      patterns: [
        {
          begin: '(?i)\\G(<)(style)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.style.html'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.tag.html'}},
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(?!\\G)',
          end: '(?i)(?=</style>)',
          name: 'source.css.embedded.html',
          patterns: [{include: '#embedded-code'}, {include: 'source.css'}]
        }
      ]
    },
    {
      begin:
        '(?i)(?=<script\\s+.*?\\btype\\s*=\\s*[\'"]?text/(?:x-handlebars|(?:x-(?:handlebars-)?|ng-)?template|html|ractive)[\'"]?(\\s+|>))',
      end: '(</)((?i)script)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.script.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      name: 'meta.tag.script.html',
      patterns: [
        {
          begin: '(?i)\\G(<)(script)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.tag.html'}},
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(?!\\G)',
          end: '(?i)(?=</script>)',
          name: 'text.embedded.html',
          patterns: [{include: 'text.html.basic'}]
        }
      ]
    },
    {
      begin:
        '(?i)(?=<script\\s+.*?\\btype\\s*=\\s*[\'"]?text/coffeescript[\'"]?(\\s+|>))',
      end: '(</)((?i)script)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.script.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      name: 'meta.tag.script.html',
      patterns: [
        {
          begin: '(?i)\\G(<)(script)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.tag.html'}},
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(?!\\G)',
          end: '(?i)(?=</script>)',
          name: 'source.coffee.embedded.html',
          patterns: [
            {
              begin: '###',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.coffee'}
              },
              end: '###|(?=(?i)</script>)',
              endCaptures: {0: {name: 'punctuation.definition.comment.coffee'}},
              name: 'comment.block.coffee'
            },
            {
              begin: '#',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.coffee'}
              },
              end: '(?=(?i)</script>|$)',
              name: 'comment.line.number-sign.coffee'
            },
            {include: 'source.coffee'}
          ]
        }
      ]
    },
    {
      begin:
        '(?i)(?=<script\\s+.*?\\btype\\s*=\\s*[\'"]?application/graphql[\'"]?(\\s+|>))',
      end: '(</)((?i)script)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.script.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      name: 'meta.tag.script.html',
      patterns: [
        {
          begin: '(?i)\\G(<)(script)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.tag.html'}},
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(?!\\G)',
          end: '(?i)(?=</script>)',
          name: 'source.graphql.embedded.html',
          patterns: [
            {
              begin: '#',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.graphql'}
              },
              end: '(?=(?i)</script>|$)',
              name: 'comment.line.number-sign.graphql'
            },
            {include: 'source.graphql'}
          ]
        }
      ]
    },
    {
      begin: '(?i)(?=<script(\\s+|>))',
      end: '(</)((?i)script)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.script.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      name: 'meta.tag.script.html',
      patterns: [
        {
          begin: '(?i)\\G(<)(script)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.tag.html'}},
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(?!\\G)',
          end: '(?i)(?=</script>)',
          name: 'source.js.embedded.html',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.js'}},
              end: '(?=(?i)</script>|$)',
              name: 'comment.line.double-slash.js'
            },
            {
              begin: '/\\*',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.begin.js'}
              },
              end: '\\*/|(?=(?i)</script>)',
              endCaptures: {
                0: {name: 'punctuation.definition.comment.begin.js'}
              },
              name: 'comment.block.js'
            },
            {include: 'source.js'}
          ]
        }
      ]
    },
    {
      begin: '(?i)(</?)(body|head|html)(?=\\s|/?>)',
      captures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.structure.$2.html'}
      },
      end: '(>)',
      name: 'meta.tag.structure.$2.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(?i)(</?)(address|blockquote|dd|div|section|article|aside|header|footer|nav|menu|dl|dt|fieldset|form|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|object|ol|p|ul|applet|center|dir|hr|pre)(?=\\s|/?>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.block.$2.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.block.$2.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(?i)(</?)(a|abbr|acronym|area|b|base|basefont|bdo|big|br|button|caption|cite|code|col|colgroup|del|dfn|em|font|head|html|i|img|input|ins|isindex|kbd|label|legend|li|link|map|meta|noscript|optgroup|option|param|q|s|samp|script|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|tt|u|var)(?=\\s|/?>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.inline.$2.html'}
      },
      end: '((?: ?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.inline.$2.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(</?)([a-zA-Z0-9:-]+)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.other.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.other.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {include: '#character-reference'},
    {match: '<>', name: 'invalid.illegal.incomplete.html'}
  ],
  repository: {
    'character-reference': {
      patterns: [
        {
          begin: '(&)(#\\d+|#[xX][0-9a-fA-F]+)',
          beginCaptures: {
            1: {name: 'punctuation.definition.entity.begin.html'},
            2: {name: 'entity.name.entity.other.html'}
          },
          end: ';',
          endCaptures: {0: {name: 'punctuation.definition.entity.end.html'}},
          name: 'constant.character.entity.html'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.entity.begin.html'},
            2: {name: 'entity.name.entity.other.html'},
            3: {name: 'punctuation.definition.entity.end.html'}
          },
          match: '(&)([a-zA-Z0-9]+)(;)',
          name: 'constant.character.entity.html'
        },
        {
          match: '&(?!\\s|<|&|[a-zA-Z0-9])',
          name: 'invalid.illegal.bad-ampersand.html'
        }
      ]
    },
    'embedded-code': {patterns: [{include: '#smarty'}, {include: '#python'}]},
    python: {
      begin: '(?:^\\s*)<\\?python(?!.*\\?>)',
      end: '\\?>(?:\\s*$\\n)?',
      name: 'source.python.embedded.html',
      patterns: [{include: 'source.python'}]
    },
    smarty: {
      patterns: [
        {
          begin: '(\\{(literal)\\})',
          captures: {
            1: {name: 'source.smarty.embedded.html'},
            2: {name: 'support.function.built-in.smarty'}
          },
          end: '(\\{/(literal)\\})'
        }
      ]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.html',
      patterns: [{include: '#embedded-code'}, {include: '#character-reference'}]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.html',
      patterns: [{include: '#embedded-code'}, {include: '#character-reference'}]
    },
    'tag-class-attribute': {
      begin: '\\b(class)\\s*(=)\\s*',
      captures: {
        1: {name: 'entity.other.attribute-name.class.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      end: '(?!\\G)|(?=\\s|/?>)',
      name: 'meta.attribute-with-value.class.html',
      patterns: [
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'},
        {include: '#unquoted-attribute'}
      ]
    },
    'tag-generic-attribute': {
      patterns: [
        {
          begin: '([^\\s/=>"\'<]+)\\s*(=)\\s*',
          beginCaptures: {
            1: {name: 'entity.other.attribute-name.html'},
            2: {name: 'punctuation.separator.key-value.html'}
          },
          end: '(?!\\G)|(?=\\s|/?>)',
          name: 'meta.attribute-with-value.html',
          patterns: [
            {include: '#string-double-quoted'},
            {include: '#string-single-quoted'},
            {include: '#unquoted-attribute'}
          ]
        },
        {
          captures: {0: {name: 'entity.other.attribute-name.html'}},
          match: '[^\\s/=>"\'<]+',
          name: 'meta.attribute-without-value.html'
        }
      ]
    },
    'tag-id-attribute': {
      begin: '\\b(id)\\s*(=)\\s*',
      captures: {
        1: {name: 'entity.other.attribute-name.id.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      end: '(?!\\G)|(?=\\s|/?>)',
      name: 'meta.attribute-with-value.id.html',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'meta.toc-list.id.html',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.double.html',
          patterns: [
            {include: '#embedded-code'},
            {include: '#character-reference'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'meta.toc-list.id.html',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.single.html',
          patterns: [
            {include: '#embedded-code'},
            {include: '#character-reference'}
          ]
        },
        {include: '#unquoted-attribute'}
      ]
    },
    'tag-stuff': {
      patterns: [
        {include: '#tag-id-attribute'},
        {include: '#tag-class-attribute'},
        {include: '#tag-style-attribute'},
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'},
        {include: '#embedded-code'}
      ]
    },
    'tag-style-attribute': {
      begin: '\\b(style)\\s*(=)\\s*',
      beginCaptures: {
        1: {name: 'entity.other.attribute-name.style.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      end: '(?!\\G)|(?=\\s|/?>)',
      name: 'meta.attribute-with-value.style.html',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'source.css.style.html',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.double.html',
          patterns: [
            {
              captures: {
                0: {
                  patterns: [
                    {include: '#embedded-code'},
                    {include: '#entities'},
                    {include: 'source.css#rule-list-innards'}
                  ]
                }
              },
              match: '[^"]+',
              name: 'meta.property-list.css'
            }
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'source.css.style.html',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.single.html',
          patterns: [
            {
              captures: {
                0: {
                  patterns: [
                    {include: '#embedded-code'},
                    {include: '#entities'},
                    {include: 'source.css#rule-list-innards'}
                  ]
                }
              },
              match: "[^']+",
              name: 'meta.property-list.css'
            }
          ]
        },
        {
          captures: {
            0: {
              name: 'source.css.style.html',
              patterns: [
                {
                  captures: {
                    0: {patterns: [{include: 'source.css#rule-list-innards'}]}
                  },
                  match: '.+',
                  name: 'meta.property-list.css'
                }
              ]
            }
          },
          match: '([^\\s&>"\'<=`]|&(?=>))+',
          name: 'string.unquoted.html'
        }
      ]
    },
    'unquoted-attribute': {
      patterns: [
        {include: '#character-reference'},
        {match: '([^\\s&>"\'<=`]|&(?=>))+', name: 'string.unquoted.html'}
      ]
    }
  },
  scopeName: 'text.html.basic'
}

export default grammar
