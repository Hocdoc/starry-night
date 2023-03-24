// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom/language-shellscript>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [
    '.bash',
    '.bats',
    '.command',
    '.csh',
    '.ebuild',
    '.eclass',
    '.ksh',
    '.sh',
    '.sh.in',
    '.tcsh',
    '.tmux',
    '.tool',
    '.zsh',
    '.zsh-theme'
  ],
  names: [
    'abuild',
    'alpine-abuild',
    'apkbuild',
    'bash',
    'gentoo-ebuild',
    'gentoo-eclass',
    'openrc',
    'openrc-runscript',
    'sh',
    'shell',
    'shell-script',
    'tcsh',
    'zsh'
  ],
  patterns: [
    {include: '#comment'},
    {include: '#pipeline'},
    {include: '#list'},
    {include: '#compound-command'},
    {include: '#loop'},
    {include: '#string'},
    {include: '#function-definition'},
    {include: '#variable'},
    {include: '#interpolation'},
    {include: '#heredoc'},
    {include: '#herestring'},
    {include: '#redirection'},
    {include: '#pathname'},
    {include: '#keyword'},
    {include: '#support'}
  ],
  repository: {
    'case-clause': {
      patterns: [
        {
          begin: '(?=\\S)',
          end: ';;',
          endCaptures: {0: {name: 'punctuation.terminator.case-clause.shell'}},
          name: 'meta.scope.case-clause.shell',
          patterns: [
            {
              begin: '\\(|(?=\\S)',
              beginCaptures: {
                0: {name: 'punctuation.definition.case-pattern.shell'}
              },
              end: '\\)',
              endCaptures: {
                0: {name: 'punctuation.definition.case-pattern.shell'}
              },
              name: 'meta.scope.case-pattern.shell',
              patterns: [
                {match: '\\|', name: 'punctuation.separator.pipe-sign.shell'},
                {include: '#string'},
                {include: '#variable'},
                {include: '#interpolation'},
                {include: '#pathname'}
              ]
            },
            {
              begin: '(?<=\\))',
              end: '(?=;;)',
              name: 'meta.scope.case-clause-body.shell',
              patterns: [{include: '$self'}]
            }
          ]
        }
      ]
    },
    comment: {
      begin: '(^\\s+)?(?<=^|\\W)(?<!-)(?=#)(?!#{)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.shell'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#!',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.shebang.shell'}
          },
          end: '$',
          name: 'comment.line.number-sign.shebang.shell'
        },
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.shell'}},
          end: '$',
          name: 'comment.line.number-sign.shell'
        }
      ]
    },
    'compound-command': {
      patterns: [
        {
          begin: '\\[{1,2}',
          beginCaptures: {
            0: {name: 'punctuation.definition.logical-expression.shell'}
          },
          end: '\\]{1,2}',
          endCaptures: {
            0: {name: 'punctuation.definition.logical-expression.shell'}
          },
          name: 'meta.scope.logical-expression.shell',
          patterns: [{include: '#logical-expression'}, {include: '$self'}]
        },
        {
          begin: '\\({2}',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '\\){2}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.other.math.shell',
          patterns: [{include: '#math'}]
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.definition.subshell.shell'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.subshell.shell'}},
          name: 'meta.scope.subshell.shell',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<=\\s|^){(?=\\s|$)',
          beginCaptures: {0: {name: 'punctuation.definition.group.shell'}},
          end: '(?<=^|;)\\s*(})',
          endCaptures: {1: {name: 'punctuation.definition.group.shell'}},
          name: 'meta.scope.group.shell',
          patterns: [{include: '$self'}]
        }
      ]
    },
    'function-definition': {
      patterns: [
        {
          begin: '(?<=^|;|&|\\s)(function)\\s+([^\\s\\\\]+)(?:\\s*(\\(\\)))?',
          beginCaptures: {
            1: {name: 'storage.type.function.shell'},
            2: {name: 'entity.name.function.shell'},
            3: {name: 'punctuation.definition.arguments.shell'}
          },
          end: ';|&|$',
          endCaptures: {0: {name: 'punctuation.definition.function.shell'}},
          name: 'meta.function.shell',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<=^|;|&|\\s)([^\\s\\\\=]+)\\s*(\\(\\))',
          beginCaptures: {
            1: {name: 'entity.name.function.shell'},
            2: {name: 'punctuation.definition.arguments.shell'}
          },
          end: ';|&|$',
          endCaptures: {0: {name: 'punctuation.definition.function.shell'}},
          name: 'meta.function.shell',
          patterns: [{include: '$self'}]
        }
      ]
    },
    heredoc: {
      patterns: [
        {
          begin: '(<<)-\\s*("|\'|)\\s*(RUBY)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'source.ruby.embedded.shell',
          end: '^\\t*(RUBY)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.no-indent.ruby.shell',
          patterns: [{include: 'source.ruby'}]
        },
        {
          begin: '(<<)\\s*("|\'|)\\s*(RUBY)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'source.ruby.embedded.shell',
          end: '^(RUBY)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.ruby.shell',
          patterns: [{include: 'source.ruby'}]
        },
        {
          begin: '(<<)-\\s*("|\'|)\\s*(PYTHON)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'source.python.embedded.shell',
          end: '^\\t*(PYTHON)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.no-indent.python.shell',
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '(<<)\\s*("|\'|)\\s*(PYTHON)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'source.python.embedded.shell',
          end: '^(PYTHON)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.python.shell',
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '(<<)-\\s*("|\'|)\\s*(APPLESCRIPT)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'source.applescript.embedded.shell',
          end: '^\\t*(APPLESCRIPT)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.no-indent.applescript.shell',
          patterns: [{include: 'source.applescript'}]
        },
        {
          begin: '(<<)\\s*("|\'|)\\s*(APPLESCRIPT)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'source.applescript.embedded.shell',
          end: '^(APPLESCRIPT)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.applescript.shell',
          patterns: [{include: 'source.applescript'}]
        },
        {
          begin: '(<<)-\\s*("|\'|)\\s*(HTML)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'text.html.embedded.shell',
          end: '^\\t*(HTML)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.no-indent.html.shell',
          patterns: [{include: 'text.html.basic'}]
        },
        {
          begin: '(<<)\\s*("|\'|)\\s*(HTML)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'text.html.embedded.shell',
          end: '^(HTML)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.html.shell',
          patterns: [{include: 'text.html.basic'}]
        },
        {
          begin: '(<<)-\\s*("|\'|)\\s*(MARKDOWN)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'text.html.markdown.embedded.shell',
          end: '^\\t*(MARKDOWN)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.no-indent.markdown.shell',
          patterns: [{include: 'source.gfm'}]
        },
        {
          begin: '(<<)\\s*("|\'|)\\s*(MARKDOWN)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'text.html.markdown.embedded.shell',
          end: '^(MARKDOWN)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.markdown.shell',
          patterns: [{include: 'source.gfm'}]
        },
        {
          begin: '(<<)-\\s*("|\'|)\\s*(TEXTILE)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'text.html.textile.embedded.shell',
          end: '^\\t*(TEXTILE)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.no-indent.textile.shell',
          patterns: []
        },
        {
          begin: '(<<)\\s*("|\'|)\\s*(TEXTILE)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'text.html.textile.embedded.shell',
          end: '^(TEXTILE)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.textile.shell',
          patterns: []
        },
        {
          begin: '(<<)-\\s*("|\'|)\\s*(SHELL)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'source.shell.embedded.shell',
          end: '^\\t*(\\3)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.no-indent.shell.shell',
          patterns: [{include: 'source.shell'}]
        },
        {
          begin: '(<<)\\s*("|\'|)\\s*(SHELL)(?=\\s|;|&|<|"|\')\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          contentName: 'source.shell.embedded.shell',
          end: '^(\\3)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.shell.shell',
          patterns: [{include: 'source.shell'}]
        },
        {
          begin: '(<<)-\\s*("|\')\\s*\\\\?([^;&<\\s]+)\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          end: '^\\t*(\\3)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.no-indent.shell'
        },
        {
          begin: '(<<)\\s*("|\')\\s*\\\\?([^;&<\\s]+)\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            3: {name: 'keyword.control.heredoc-token.shell'}
          },
          end: '^(\\3)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.shell'
        },
        {
          begin: '(<<)-\\s*\\\\?([^;&<\\s]+)',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            2: {name: 'keyword.control.heredoc-token.shell'}
          },
          end: '^\\t*(\\2)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.expanded.no-indent.shell',
          patterns: [
            {
              match: '\\\\[\\$`\\\\\\n]',
              name: 'constant.character.escape.shell'
            },
            {include: '#variable'},
            {include: '#interpolation'}
          ]
        },
        {
          begin: '(<<)\\s*\\\\?([^;&<\\s]+)',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.shell'},
            2: {name: 'keyword.control.heredoc-token.shell'}
          },
          end: '^(\\2)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.shell'}},
          name: 'string.unquoted.heredoc.expanded.shell',
          patterns: [
            {
              match: '\\\\[\\$`\\\\\\n]',
              name: 'constant.character.escape.shell'
            },
            {include: '#variable'},
            {include: '#interpolation'}
          ]
        }
      ]
    },
    herestring: {
      patterns: [
        {
          begin: "(<<<)\\s*(('))",
          beginCaptures: {
            1: {name: 'keyword.operator.herestring.shell'},
            2: {name: 'string.quoted.single.shell'},
            3: {name: 'punctuation.definition.string.begin.shell'}
          },
          contentName: 'string.quoted.single.shell',
          end: "(')",
          endCaptures: {
            0: {name: 'string.quoted.single.shell'},
            1: {name: 'punctuation.definition.string.end.shell'}
          },
          name: 'meta.herestring.shell'
        },
        {
          begin: '(<<<)\\s*(("))',
          beginCaptures: {
            1: {name: 'keyword.operator.herestring.shell'},
            2: {name: 'string.quoted.double.shell'},
            3: {name: 'punctuation.definition.string.begin.shell'}
          },
          contentName: 'string.quoted.double.shell',
          end: '(")',
          endCaptures: {
            0: {name: 'string.quoted.double.shell'},
            1: {name: 'punctuation.definition.string.end.shell'}
          },
          name: 'meta.herestring.shell'
        },
        {
          captures: {
            1: {name: 'keyword.operator.herestring.shell'},
            2: {
              name: 'string.unquoted.herestring.shell',
              patterns: [{include: '$self'}]
            }
          },
          match: '(<<<)\\s*(([^\\s)\\\\]|\\\\.)+)',
          name: 'meta.herestring.shell'
        }
      ]
    },
    interpolation: {
      patterns: [
        {
          begin: '\\$\\({2}',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '\\){2}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.other.math.shell',
          patterns: [{include: '#math'}]
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.interpolated.backtick.shell',
          patterns: [
            {match: '\\\\[`\\\\$]', name: 'constant.character.escape.shell'},
            {
              begin: '(?<=\\W)(?=#)(?!#{)',
              beginCaptures: {
                1: {name: 'punctuation.whitespace.comment.leading.shell'}
              },
              end: '(?!\\G)',
              patterns: [
                {
                  begin: '#',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.comment.shell'}
                  },
                  end: '(?=`)',
                  name: 'comment.line.number-sign.shell'
                }
              ]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\$\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.interpolated.dollar.shell',
          patterns: [{include: '$self'}]
        }
      ]
    },
    keyword: {
      patterns: [
        {
          match:
            '(?<=^|;|&|\\s)(then|else|elif|fi|for|in|do|done|select|case|continue|esac|while|until|return)(?=\\s|;|&|$)',
          name: 'keyword.control.shell'
        },
        {
          match:
            '(?<=^|;|&|\\s)(?:export|declare|typeset|local|readonly)(?=\\s|;|&|$)',
          name: 'storage.modifier.shell'
        }
      ]
    },
    list: {
      patterns: [{match: ';|&&|&|\\|\\|', name: 'keyword.operator.list.shell'}]
    },
    'logical-expression': {
      patterns: [
        {
          match: '=[=~]?|!=?|<|>|&&|\\|\\|',
          name: 'keyword.operator.logical.shell'
        },
        {
          match: '(?<!\\S)-(nt|ot|ef|eq|ne|l[te]|g[te]|[a-hknoprstuwxzOGLSN])',
          name: 'keyword.operator.logical.shell'
        }
      ]
    },
    loop: {
      patterns: [
        {
          begin: '(?<=^|;|&|\\s)(for)\\s+(?=\\({2})',
          beginCaptures: {1: {name: 'keyword.control.shell'}},
          end: '(?<=^|;|&|\\s)done(?=\\s|;|&|$)',
          endCaptures: {0: {name: 'keyword.control.shell'}},
          name: 'meta.scope.for-loop.shell',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<=^|;|&|\\s)(for)\\s+(.+?)\\s+(in)(?=\\s|;|&|$)',
          beginCaptures: {
            1: {name: 'keyword.control.shell'},
            2: {
              name: 'variable.other.loop.shell',
              patterns: [{include: '#string'}]
            },
            3: {name: 'keyword.control.shell'}
          },
          end: '(?<=^|;|&|\\s)done(?=\\s|;|&|$)',
          endCaptures: {0: {name: 'keyword.control.shell'}},
          name: 'meta.scope.for-in-loop.shell',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<=^|;|&|\\s)(while|until)(?=\\s|;|&|$)',
          beginCaptures: {1: {name: 'keyword.control.shell'}},
          end: '(?<=^|;|&|\\s)done(?=\\s|;|&|$)',
          endCaptures: {0: {name: 'keyword.control.shell'}},
          name: 'meta.scope.while-loop.shell',
          patterns: [{include: '$self'}]
        },
        {
          begin:
            '(?<=^|;|&|\\s)(select)\\s+((?:[^\\s\\\\]|\\\\.)+)(?=\\s|;|&|$)',
          beginCaptures: {
            1: {name: 'keyword.control.shell'},
            2: {name: 'variable.other.loop.shell'}
          },
          end: '(?<=^|;|&|\\s)(done)(?=\\s|;|&|$)',
          endCaptures: {1: {name: 'keyword.control.shell'}},
          name: 'meta.scope.select-block.shell',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<=^|;|&|\\s)case(?=\\s|;|&|$)',
          beginCaptures: {0: {name: 'keyword.control.shell'}},
          end: '(?<=^|;|&|\\s)esac(?=\\s|;|&|$)',
          endCaptures: {0: {name: 'keyword.control.shell'}},
          name: 'meta.scope.case-block.shell',
          patterns: [
            {
              begin: '(?<=^|;|&|\\s)in(?=\\s|;|&|$)',
              beginCaptures: {0: {name: 'keyword.control.shell'}},
              end: '(?<=^|;|&|\\s)(?=esac(\\s|;|&|$))',
              name: 'meta.scope.case-body.shell',
              patterns: [
                {include: '#comment'},
                {include: '#case-clause'},
                {include: '$self'}
              ]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '(?<=^|;|&|\\s)if(?=\\s|;|&|$)',
          beginCaptures: {0: {name: 'keyword.control.shell'}},
          end: '(?<=^|;|&|\\s)fi(?=\\s|;|&|$)',
          endCaptures: {0: {name: 'keyword.control.shell'}},
          name: 'meta.scope.if-block.shell',
          patterns: [{include: '$self'}]
        }
      ]
    },
    math: {
      patterns: [
        {include: '#variable'},
        {
          match:
            '\\+{1,2}|-{1,2}|!|~|\\*{1,2}|/|%|<[<=]?|>[>=]?|==|!=|^|\\|{1,2}|&{1,2}|\\?|\\:|,|=|[*/%+\\-&^|]=|<<=|>>=',
          name: 'keyword.operator.arithmetic.shell'
        },
        {match: '0[xX][0-9A-Fa-f]+', name: 'constant.numeric.hex.shell'},
        {match: '0\\d+', name: 'constant.numeric.octal.shell'},
        {
          match: '\\d{1,2}#[0-9a-zA-Z@_]+',
          name: 'constant.numeric.other.shell'
        },
        {match: '\\d+', name: 'constant.numeric.integer.shell'}
      ]
    },
    pathname: {
      patterns: [
        {match: '(?<=\\s|:|=|^)~', name: 'keyword.operator.tilde.shell'},
        {match: '\\*|\\?', name: 'keyword.operator.glob.shell'},
        {
          begin: '([?*+@!])(\\()',
          beginCaptures: {
            1: {name: 'keyword.operator.extglob.shell'},
            2: {name: 'punctuation.definition.extglob.shell'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.extglob.shell'}},
          name: 'meta.structure.extglob.shell',
          patterns: [{include: '$self'}]
        }
      ]
    },
    pipeline: {
      patterns: [
        {
          match: '(?<=^|;|&|\\s)(time)(?=\\s|;|&|$)',
          name: 'keyword.other.shell'
        },
        {match: '[|!]', name: 'keyword.operator.pipe.shell'}
      ]
    },
    redirection: {
      patterns: [
        {
          begin: '[><]\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.interpolated.process-substitution.shell',
          patterns: [{include: '$self'}]
        },
        {
          match: '(?<![<>])(&>|\\d*>&\\d*|\\d*(>>|>|<)|\\d*<&|\\d*<>)(?![<>])',
          name: 'keyword.operator.redirect.shell'
        }
      ]
    },
    string: {
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.shell'},
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.quoted.single.shell'
        },
        {
          begin: '\\$?"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.quoted.double.shell',
          patterns: [
            {
              match: '\\\\[\\$`"\\\\\\n]',
              name: 'constant.character.escape.shell'
            },
            {include: '#variable'},
            {include: '#interpolation'}
          ]
        },
        {
          begin: "\\$'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.quoted.single.dollar.shell',
          patterns: [
            {
              match: "\\\\(a|b|e|f|n|r|t|v|\\\\|')",
              name: 'constant.character.escape.ansi-c.shell'
            },
            {
              match: '\\\\[0-9]{3}',
              name: 'constant.character.escape.octal.shell'
            },
            {
              match: '\\\\x[0-9a-fA-F]{2}',
              name: 'constant.character.escape.hex.shell'
            },
            {
              match: '\\\\c.',
              name: 'constant.character.escape.control-char.shell'
            }
          ]
        }
      ]
    },
    support: {
      patterns: [
        {
          match: '(?<=^|;|&|\\s)(?::|\\.)(?=\\s|;|&|$)',
          name: 'support.function.builtin.shell'
        },
        {
          match:
            '(?<=^|;|&|\\s)(?:alias|bg|bind|break|builtin|caller|cd|command|compgen|complete|dirs|disown|echo|enable|eval|exec|exit|false|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|read|readonly|set|shift|shopt|source|suspend|test|times|trap|true|type|ulimit|umask|unalias|unset|wait)(?=\\s|;|&|$)',
          name: 'support.function.builtin.shell'
        }
      ]
    },
    variable: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.shell'}},
          match: '(\\$)[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'variable.other.normal.shell'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.shell'}},
          match: '(\\$)[-*@#?$!0_]',
          name: 'variable.other.special.shell'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.shell'}},
          match: '(\\$)[1-9]',
          name: 'variable.other.positional.shell'
        },
        {
          begin: '\\${',
          beginCaptures: {0: {name: 'punctuation.definition.variable.shell'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.definition.variable.shell'}},
          name: 'variable.other.bracket.shell',
          patterns: [
            {
              match: '!|:[-=?]?|\\*|@|#{1,2}|%{1,2}|/',
              name: 'keyword.operator.expansion.shell'
            },
            {
              captures: {
                1: {name: 'punctuation.section.array.shell'},
                3: {name: 'punctuation.section.array.shell'}
              },
              match: '(\\[)([^\\]]+)(\\])'
            },
            {include: '#variable'},
            {include: '#string'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.shell'
}

export default grammar
