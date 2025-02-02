// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/perl6/atom-language-perl6>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  dependencies: ['source.quoting.raku'],
  extensions: [
    '.6pl',
    '.6pm',
    '.nqp',
    '.p6',
    '.p6l',
    '.p6m',
    '.pl6',
    '.pm6',
    '.pod',
    '.pod6',
    '.raku',
    '.rakumod'
  ],
  names: ['perl-6', 'perl6', 'pod-6', 'raku'],
  patterns: [
    {
      begin: '^\\s*(=)(finish)',
      beginCaptures: {
        1: {name: 'storage.modifier.block.finish.raku'},
        2: {name: 'keyword.operator.block.finish.raku'}
      },
      contentName: 'comment.block.finish.raku',
      patterns: [{include: '#comment-block-syntax'}]
    },
    {include: '#comment-block-delimited'},
    {
      begin: '^\\s*(=)(?:(para)|(for)\\s+(\\w+))',
      beginCaptures: {
        1: {name: 'storage.modifier.block.paragraph.raku'},
        2: {name: 'keyword.operator.block.paragraph.raku'},
        3: {name: 'entity.other.attribute-name.paragraph.raku'}
      },
      contentName: 'comment.block.paragraph.raku',
      end: '(?=^\\s*$|^\\s*=\\w+.*$)',
      patterns: [{include: '#comment-block-syntax'}]
    },
    {include: '#comment-block-abbreviated'},
    {
      captures: {
        1: {name: 'comment.punctuation.pound.raku'},
        2: {name: 'meta.declarator.raku'},
        3: {name: 'comment.inline.declarator.raku'}
      },
      match: '^\\s*(#)([\\|\\=])(.*)\\n',
      name: 'meta.documentation.block.declarator.raku'
    },
    {
      begin: '\\s*#`\\(\\(\\(',
      end: '\\)\\)\\)',
      name: 'comment.multiline.hash-tick.triple_paren.raku',
      patterns: [
        {
          begin: '\\(\\(\\(',
          end: '\\)\\)\\)',
          name: 'comment.internal.triple_paren.raku'
        }
      ]
    },
    {
      begin: '\\s*#`\\[\\[\\[',
      end: '\\]\\]\\]',
      name: 'comment.multiline.hash-tick.triple_bracket.raku',
      patterns: [
        {
          begin: '\\[\\[\\[',
          end: '\\]\\]\\]',
          name: 'comment.internal.triple_bracket.raku'
        }
      ]
    },
    {
      begin: '\\s*#`\\{\\{\\{',
      end: '\\}\\}\\}',
      name: 'comment.multiline.hash-tick.triple_brace.raku',
      patterns: [
        {
          begin: '\\{\\{\\{',
          end: '\\}\\}\\}',
          name: 'comment.internal.triple_brace.raku'
        }
      ]
    },
    {
      begin: '\\s*#`<<<',
      end: '>>>',
      name: 'comment.multiline.hash-tick.triple_angle.raku',
      patterns: [
        {begin: '<<<', end: '>>>', name: 'comment.internal.triple_angle.raku'}
      ]
    },
    {
      begin: '\\s*#`<<',
      end: '>>',
      name: 'comment.multiline.hash-tick.double_angle.raku',
      patterns: [
        {begin: '<<', end: '>>', name: 'comment.internal.double_angle.raku'}
      ]
    },
    {
      begin: '\\s*#`\\(\\(',
      end: '\\)\\)',
      name: 'comment.multiline.hash-tick.double_paren.raku',
      patterns: [
        {
          begin: '\\(\\(',
          end: '\\)\\)',
          name: 'comment.internal.double_paren.raku'
        }
      ]
    },
    {
      begin: '\\s*#`\\[\\[',
      end: '\\]\\]',
      name: 'comment.multiline.hash-tick.double_bracket.raku',
      patterns: [
        {
          begin: '\\[\\[',
          end: '\\]\\]',
          name: 'comment.internal.double_bracket.raku'
        }
      ]
    },
    {
      begin: '\\s*#`{{',
      end: '}}',
      name: 'comment.multiline.hash-tick.double_brace.raku',
      patterns: [
        {begin: '{{', end: '}}', name: 'comment.internal.double_brace.raku'}
      ]
    },
    {
      begin: '\\s*#`{',
      end: '}',
      name: 'comment.multiline.hash-tick.brace.raku',
      patterns: [{begin: '{', end: '}', name: 'comment.internal.brace.raku'}]
    },
    {
      begin: '\\s*#`<',
      end: '>',
      name: 'comment.multiline.hash-tick.angle.raku',
      patterns: [{begin: '<', end: '>', name: 'comment.internal.angle.raku'}]
    },
    {
      begin: '\\s*#`\\(',
      end: '\\)',
      name: 'comment.multiline.hash-tick.paren.raku',
      patterns: [
        {begin: '\\(', end: '\\)', name: 'comment.internal.paren.raku'}
      ]
    },
    {
      begin: '\\s*#`\\[',
      end: '\\]',
      name: 'comment.multiline.hash-tick.bracket.raku',
      patterns: [
        {begin: '\\[', end: '\\]', name: 'comment.internal.bracket.raku'}
      ]
    },
    {
      begin: '\\s*#`“',
      end: '”',
      name: 'comment.multiline.hash-tick.left_double_right_double.raku',
      patterns: [
        {
          begin: '“',
          end: '”',
          name: 'comment.internal.left_double_right_double.raku'
        }
      ]
    },
    {
      begin: '\\s*#`„',
      end: '”|“',
      name: 'comment.multiline.hash-tick.left_double-low-q_right_double.raku',
      patterns: [
        {
          begin: '„',
          end: '”|“',
          name: 'comment.internal.left_double-low-q_right_double.raku'
        }
      ]
    },
    {
      begin: '\\s*#`‘',
      end: '’',
      name: 'comment.multiline.hash-tick.left_single_right_single.raku',
      patterns: [
        {
          begin: '‘',
          end: '’',
          name: 'comment.internal.left_single_right_single.raku'
        }
      ]
    },
    {
      begin: '\\s*#`‚',
      end: '‘',
      name: 'comment.multiline.hash-tick.low-q_left_single.raku',
      patterns: [
        {begin: '‚', end: '‘', name: 'comment.internal.low-q_left_single.raku'}
      ]
    },
    {
      begin: '\\s*#`「',
      end: '」',
      name: 'comment.multiline.hash-tick.fw_cornerbracket.raku',
      patterns: [
        {begin: '「', end: '」', name: 'comment.internal.fw_cornerbracket.raku'}
      ]
    },
    {
      begin: '\\s*#`｢',
      end: '｣',
      name: 'comment.multiline.hash-tick.hw_cornerbracket.raku',
      patterns: [
        {begin: '｢', end: '｣', name: 'comment.internal.hw_cornerbracket.raku'}
      ]
    },
    {
      begin: '\\s*#`«',
      end: '»',
      name: 'comment.multiline.hash-tick.chevron.raku',
      patterns: [{begin: '«', end: '»', name: 'comment.internal.chevron.raku'}]
    },
    {
      begin: '\\s*#`⟅',
      end: '⟆',
      name: 'comment.multiline.hash-tick.s-shaped-bag-delimiter.raku',
      patterns: [
        {
          begin: '⟅',
          end: '⟆',
          name: 'comment.internal.s-shaped-bag-delimiter.raku'
        }
      ]
    },
    {
      begin: '“',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.raku'}},
      end: '”',
      endCaptures: {0: {name: 'punctuation.definition.string.end.raku'}},
      name: 'string.quoted.left_double_right_double.raku',
      patterns: [
        {
          match: '\\\\[“”abtnfre\\\\\\{\\}]',
          name: 'constant.character.escape.raku'
        },
        {include: '#interpolation'},
        {
          include:
            'source.quoting.raku#q_left_double_right_double_string_content'
        }
      ]
    },
    {
      begin: '„',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.raku'}},
      end: '”|“',
      endCaptures: {0: {name: 'punctuation.definition.string.end.raku'}},
      name: 'string.quoted.left_double-low-q_right_double.raku',
      patterns: [
        {
          match: '\\\\[„”|“abtnfre\\\\\\{\\}]',
          name: 'constant.character.escape.raku'
        },
        {include: '#interpolation'},
        {
          include:
            'source.quoting.raku#q_left_double-low-q_right_double_string_content'
        }
      ]
    },
    {
      begin: '(?<=\\W|^)‘',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.raku'}},
      end: '’',
      endCaptures: {0: {name: 'punctuation.definition.string.end.raku'}},
      name: 'string.quoted.single.left_single_right_single.raku',
      patterns: [
        {match: '\\\\[‘’\\\\]', name: 'constant.character.escape.raku'},
        {
          include:
            'source.quoting.raku#q_left_single_right_single_string_content'
        }
      ]
    },
    {
      begin: '(?<=\\W|^)‚',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.raku'}},
      end: '‘',
      endCaptures: {0: {name: 'punctuation.definition.string.end.raku'}},
      name: 'string.quoted.single.low-q_left_single.raku',
      patterns: [
        {match: '\\\\[‚‘\\\\]', name: 'constant.character.escape.raku'},
        {include: 'source.quoting.raku#q_low-q_left_single_string_content'}
      ]
    },
    {
      begin: "(?<=\\W|^)'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.raku'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.raku'}},
      name: 'string.quoted.single.single.raku',
      patterns: [
        {match: "\\\\['\\\\]", name: 'constant.character.escape.raku'},
        {include: 'source.quoting.raku#q_single_string_content'}
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.raku'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.raku'}},
      name: 'string.quoted.double.raku',
      patterns: [
        {
          match: '\\\\["abtnfre\\\\\\{\\}]',
          name: 'constant.character.escape.raku'
        },
        {include: '#interpolation'},
        {include: 'source.quoting.raku#q_double_string_content'}
      ]
    },
    {
      begin: '”',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.raku'}},
      end: '”',
      endCaptures: {0: {name: 'punctuation.definition.string.end.raku'}},
      name: 'string.quoted.right_double_right_double.raku',
      patterns: [
        {
          match: '\\\\[”abtnfre\\\\\\{\\}]',
          name: 'constant.character.escape.raku'
        },
        {include: '#interpolation'},
        {
          include:
            'source.quoting.raku#q_right_double_right_double_string_content'
        }
      ]
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.raku'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.raku'}},
          end: '\\n',
          name: 'comment.line.number-sign.raku'
        }
      ]
    },
    {
      match:
        '(?x) \\x{2208}|\\(elem\\)|\\x{2209}|\\!\\(elem\\)| \\x{220B}|\\(cont\\)|\\x{220C}|\\!\\(cont\\)| \\x{2286}|\\(<=\\)  |\\x{2288}|\\!\\(<=\\)  | \\x{2282}|\\(<\\)   |\\x{2284}|\\!\\(<\\)   | \\x{2287}|\\(>=\\)  |\\x{2289}|\\!\\(>=\\)  | \\x{2283}|\\(>\\)   |\\x{2285}|\\!\\(>\\)   | \\x{227C}|\\(<\\+\\)|\\x{227D}|\\(>\\+\\)   | \\x{222A}|\\(\\|\\) |\\x{2229}|\\(&\\)      | \\x{2216}|\\(\\-\\) |\\x{2296}|\\(\\^\\)    | \\x{228D}|\\(\\.\\) |\\x{228E}|\\(\\+\\)',
      name: 'keyword.operator.setbagmix.raku'
    },
    {
      captures: {
        1: {name: 'storage.type.class.raku'},
        3: {name: 'entity.name.type.class.raku'}
      },
      match:
        "(?x) ( class|enum|grammar|knowhow|module| package|role|slang|subset|monitor|actor ) (\\s+) ( ( (?:::|')? (?: ([a-zA-Z_À-ÿ\\$]) ([a-zA-Z0-9_À-ÿ\\$]|[\\-'][a-zA-Z0-9_À-ÿ\\$])* ) )+ )",
      name: 'meta.class.raku'
    },
    {include: '#p5_regex'},
    {
      captures: {
        1: {name: 'punctuation.definition.regexp.raku'},
        2: {
          name: 'string.regexp.raku',
          patterns: [
            {include: '#interpolation'},
            {include: 'source.regexp.raku'}
          ]
        },
        3: {name: 'punctuation.definition.regexp.raku'}
      },
      match:
        '(?x)\n(?<=\n  ^\n | ^\\s\n | [\\s\\(] [^\\p{Nd}\\p{L}]\n | ~~\\s|~~\\s\\s|match\\(\n | match:\\s\n)\n([/]) # Solidus\n(.*?) # Regex contents\n(?: (?<!\\\\)|(?<=\\\\\\\\) ) (/) # Ending'
    },
    {
      begin:
        '(?x)\n(?<= [=,(\\[]|when|=>|~~) \\s*\n(?:\n  (m|rx|s)?\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n) # With the m or rx\n\\s*\n([/]) # Solidus',
      beginCaptures: {
        1: {name: 'string.regexp.construct.raku'},
        2: {name: 'entity.name.section.adverb.regexp.raku'},
        3: {name: 'punctuation.definition.regexp.raku'}
      },
      contentName: 'string.regexp.raku',
      end: "(?x) (?: (?<!\\\\)|(?<=\\\\\\\\)|(?<!')|(?<=\\\\ ') ) (/)",
      endCaptures: {1: {name: 'punctuation.definition.regexp.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|[=,(\\[~]|when|=> ) \\s*\n(?:\n  (m|rx|s)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n) # With the m or rx\n\\s*\n([{]) # Left curly brace',
      beginCaptures: {
        1: {name: 'string.regexp.construct.raku'},
        2: {name: 'entity.name.section.adverb.regexp.raku'},
        3: {name: 'punctuation.definition.regexp.raku'}
      },
      contentName: 'fstring.regexp.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (\\})',
      endCaptures: {1: {name: 'punctuation.definition.regexp.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin: '(?<![\\w\\/])(m|rx)((?:\\s*:\\w+)*)\\s*(\\{)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.raku'},
        2: {name: 'entity.name.section.adverb.regexp.raku'},
        3: {name: 'punctuation.definition.regexp.raku'}
      },
      contentName: 'string.regexp.raku',
      end: '(?<!\\\\)(\\})',
      endCaptures: {1: {name: 'punctuation.definition.regexp.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin: '(?<![\\w\\/])(m|rx)((?:\\s*:\\w+)*)\\s*(\\[)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.raku'},
        2: {name: 'entity.name.section.adverb.regexp.raku'},
        3: {name: 'punctuation.definition.regexp.raku'}
      },
      contentName: 'string.regexp.raku',
      end: '(?<!\\\\)(\\])',
      endCaptures: {1: {name: 'punctuation.definition.regexp.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin: '(?<=\\W|^)｢',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.raku'}},
      end: '｣',
      endCaptures: {0: {name: 'punctuation.definition.string.end.raku'}},
      name: 'string.quoted.single.raku',
      patterns: [
        {include: 'source.quoting.raku#q_hw_cornerbracket_string_content'}
      ]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(/)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.slash.raku'},
        2: {name: 'entity.name.section.adverb.regexp.slash.raku'},
        3: {name: 'punctuation.definition.regexp.slash.raku'}
      },
      contentName: 'string.regexp.slash.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (/)',
      endCaptures: {1: {name: 'punctuation.definition.regexp.slash.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n({)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.brace.raku'},
        2: {name: 'entity.name.section.adverb.regexp.brace.raku'},
        3: {name: 'punctuation.definition.regexp.brace.raku'}
      },
      contentName: 'string.regexp.brace.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (})',
      endCaptures: {1: {name: 'punctuation.definition.regexp.brace.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(<)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.angle.raku'},
        2: {name: 'entity.name.section.adverb.regexp.angle.raku'},
        3: {name: 'punctuation.definition.regexp.angle.raku'}
      },
      contentName: 'string.regexp.angle.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (>)',
      endCaptures: {1: {name: 'punctuation.definition.regexp.angle.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(\\()',
      beginCaptures: {
        1: {name: 'string.regexp.construct.paren.raku'},
        2: {name: 'entity.name.section.adverb.regexp.paren.raku'},
        3: {name: 'punctuation.definition.regexp.paren.raku'}
      },
      contentName: 'string.regexp.paren.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (\\))',
      endCaptures: {1: {name: 'punctuation.definition.regexp.paren.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(\\[)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.bracket.raku'},
        2: {name: 'entity.name.section.adverb.regexp.bracket.raku'},
        3: {name: 'punctuation.definition.regexp.bracket.raku'}
      },
      contentName: 'string.regexp.bracket.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (\\])',
      endCaptures: {1: {name: 'punctuation.definition.regexp.bracket.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(“)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.left_double_right_double.raku'},
        2: {
          name: 'entity.name.section.adverb.regexp.left_double_right_double.raku'
        },
        3: {name: 'punctuation.definition.regexp.left_double_right_double.raku'}
      },
      contentName: 'string.regexp.left_double_right_double.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (”)',
      endCaptures: {
        1: {name: 'punctuation.definition.regexp.left_double_right_double.raku'}
      },
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(„)',
      beginCaptures: {
        1: {
          name: 'string.regexp.construct.left_double-low-q_right_double.raku'
        },
        2: {
          name: 'entity.name.section.adverb.regexp.left_double-low-q_right_double.raku'
        },
        3: {
          name: 'punctuation.definition.regexp.left_double-low-q_right_double.raku'
        }
      },
      contentName: 'string.regexp.left_double-low-q_right_double.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (”|“)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.regexp.left_double-low-q_right_double.raku'
        }
      },
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(‘)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.left_single_right_single.raku'},
        2: {
          name: 'entity.name.section.adverb.regexp.left_single_right_single.raku'
        },
        3: {name: 'punctuation.definition.regexp.left_single_right_single.raku'}
      },
      contentName: 'string.regexp.left_single_right_single.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (’)',
      endCaptures: {
        1: {name: 'punctuation.definition.regexp.left_single_right_single.raku'}
      },
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(‚)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.low-q_left_single.raku'},
        2: {name: 'entity.name.section.adverb.regexp.low-q_left_single.raku'},
        3: {name: 'punctuation.definition.regexp.low-q_left_single.raku'}
      },
      contentName: 'string.regexp.low-q_left_single.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (‘)',
      endCaptures: {
        1: {name: 'punctuation.definition.regexp.low-q_left_single.raku'}
      },
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(「)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.fw_cornerbracket.raku'},
        2: {name: 'entity.name.section.adverb.regexp.fw_cornerbracket.raku'},
        3: {name: 'punctuation.definition.regexp.fw_cornerbracket.raku'}
      },
      contentName: 'string.regexp.fw_cornerbracket.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (」)',
      endCaptures: {
        1: {name: 'punctuation.definition.regexp.fw_cornerbracket.raku'}
      },
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(｢)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.hw_cornerbracket.raku'},
        2: {name: 'entity.name.section.adverb.regexp.hw_cornerbracket.raku'},
        3: {name: 'punctuation.definition.regexp.hw_cornerbracket.raku'}
      },
      contentName: 'string.regexp.hw_cornerbracket.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (｣)',
      endCaptures: {
        1: {name: 'punctuation.definition.regexp.hw_cornerbracket.raku'}
      },
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(«)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.chevron.raku'},
        2: {name: 'entity.name.section.adverb.regexp.chevron.raku'},
        3: {name: 'punctuation.definition.regexp.chevron.raku'}
      },
      contentName: 'string.regexp.chevron.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (»)',
      endCaptures: {1: {name: 'punctuation.definition.regexp.chevron.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        '(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n(⟅)',
      beginCaptures: {
        1: {name: 'string.regexp.construct.s-shaped-bag-delimiter.raku'},
        2: {
          name: 'entity.name.section.adverb.regexp.s-shaped-bag-delimiter.raku'
        },
        3: {name: 'punctuation.definition.regexp.s-shaped-bag-delimiter.raku'}
      },
      contentName: 'string.regexp.s-shaped-bag-delimiter.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (⟆)',
      endCaptures: {
        1: {name: 'punctuation.definition.regexp.s-shaped-bag-delimiter.raku'}
      },
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {
      begin:
        "(?x)\n(?<= ^|\\s )\n(?:\n  (m|rx|s|S)\n  (\n    (?:\n      (?<!:P5) # < This can maybe be removed because we\n      \\s*:\\w+\n      (?!\\s*:P5) # < include p5_regex above it\n    )*\n  )\n)\n\\s*\n([^#\\p{Ps}\\p{Pe}\\p{Pi}\\p{Pf}\\w'\\-<>\\-\\]\\)\\}\\{])",
      beginCaptures: {
        1: {name: 'string.regexp.construct.any.raku'},
        2: {name: 'entity.name.section.adverb.regexp.any.raku'},
        3: {name: 'punctuation.definition.regexp.any.raku'}
      },
      contentName: 'string.regexp.any.raku',
      end: '(?x) (?: (?<!\\\\)|(?<=\\\\\\\\) ) (\\3)',
      endCaptures: {1: {name: 'punctuation.definition.regexp.any.raku'}},
      patterns: [{include: '#interpolation'}, {include: 'source.regexp.raku'}]
    },
    {include: '#shellquotes'},
    {
      begin:
        '(?x) (?: ( qq|qqx|qqw ) \\s* ( (?:\\s*:\\w+)*\\s*: (?: to|heredoc ) )\\s* | (qqto) \\s* ( (?:\\s*:\\w+)* )\\s* ) / (\\S+) /',
      beginCaptures: {
        1: {name: 'string.quoted.construct.raku'},
        2: {name: 'support.function.adverb.raku'},
        3: {name: 'string.quoted.construct.raku'},
        4: {name: 'support.function.adverb.raku'},
        5: {name: 'entity.other.attribute-name.heredoc.delimiter.raku'}
      },
      end: '\\s*\\5',
      endCaptures: {
        0: {name: 'entity.other.attribute-name.heredoc.delimiter.raku'}
      },
      name: 'string.quoted.heredoc.raku',
      patterns: [
        {
          begin: '(?<=/)',
          end: '\\n',
          name: 'meta.heredoc.continuation.raku',
          patterns: [{include: '$self'}]
        },
        {begin: '^', end: '$', patterns: [{include: '#interpolation'}]},
        {
          match: '(?x) ^ (?: . | \\n )* $',
          name: 'string.quoted.qq.heredoc.raku'
        }
      ]
    },
    {
      begin:
        '(?x) (?: ( [qQ](?!/)|qw|qww|qx|qqx ) \\s* ( (?:\\s*:\\w+)*\\s*: (?: to|heredoc ) )\\s* | (qto|Qto) \\s* ( (?:\\s*:\\w+)* )\\s* ) / (\\S+) /',
      beginCaptures: {
        1: {name: 'string.quoted.construct.raku'},
        2: {name: 'support.function.adverb.raku'},
        3: {name: 'string.quoted.construct.raku'},
        4: {name: 'support.function.adverb.raku'},
        5: {name: 'entity.other.attribute-name.heredoc.delimiter.raku'}
      },
      end: '\\s*\\5',
      endCaptures: {
        0: {name: 'entity.other.attribute-name.heredoc.delimiter.raku'}
      },
      name: 'meta.heredoc.raku',
      patterns: [
        {
          begin: '(?<=/)',
          end: '\\n',
          name: 'meta.heredoc.continuation.raku',
          patterns: [{include: '$self'}]
        },
        {match: '(?x) ^ (?: . | \\n )* $', name: 'string.quoted.q.heredoc.raku'}
      ]
    },
    {include: 'source.quoting.raku'},
    {include: '#variables'},
    {
      begin:
        '(?x) (?<![%$&@]|\\w) (?:  (multi|proto) \\s+ )? (macro|sub|submethod|method|multi|only|category) \\s+ (!)? (  [^\\s(){}]+ )',
      beginCaptures: {
        1: {name: 'storage.type.declarator.multi.raku'},
        2: {name: 'storage.type.declarator.type.raku'},
        3: {name: 'support.class.method.private.raku'},
        4: {
          patterns: [
            {
              captures: {
                1: {name: 'entity.name.function.raku'},
                2: {name: 'punctuation.definition.function.adverb.raku'},
                3: {name: 'support.type.class.adverb.raku'},
                4: {patterns: [{include: '$self'}]}
              },
              match:
                "(?x) ( [\\p{Nd}\\pL\\pM'\\-_]+ ) \\b (:)? (\\w+ \\b )? (\\S+  )?"
            }
          ]
        }
      },
      end: '(?=[\\(\\{\\s])'
    },
    {
      begin: '(?<![\\.:])(regex|rule|token)(?!\\s*=>|\\S)',
      beginCaptures: {1: {name: 'storage.type.declare.regexp.named.raku'}},
      end: '(?<!\\\\)\\}',
      endCaptures: {0: {name: 'punctuation.definition.regexp.named.raku'}},
      name: 'meta.regexp.named.raku',
      patterns: [
        {match: 'TOP', name: 'entity.name.function.regexp.named.TOP.raku'},
        {
          match: "[\\p{Nd}\\pL\\pM'\\-_]+",
          name: 'entity.name.function.regexp.named.raku'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.regexp.adverb.raku'},
            2: {name: 'support.type.class.adverb.raku'}
          },
          match: '(:)(\\w+)',
          name: 'meta.regexp.named.adverb.raku'
        },
        {
          begin: '<',
          contentName: 'string.array.words.raku',
          end: '(?x) \\\\\\\\|(?<!\\\\) ( > ) (?=[\\s\\{])'
        },
        {
          begin: '«',
          contentName: 'string.array.words.chevron.raku',
          end: '(?x)  \\\\\\\\|(?<!\\\\) ( » ) (?=[\\s\\{])'
        },
        {
          begin: '\\(',
          captures: {
            0: {name: 'punctuation.definition.regexp.named.signature.perlfe'}
          },
          end: '(?<!\\\\)\\)',
          name: 'meta.regexp.named.signature.raku',
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\{',
          captures: {0: {name: 'punctuation.definition.regex.named.raku'}},
          end: '(?=\\})',
          name: 'meta.regexp.named.block.raku',
          patterns: [
            {include: '#interpolation'},
            {include: 'source.regexp.raku'}
          ]
        }
      ]
    },
    {match: '\\b(?<![\\-:])(self)(?!\\-)\\b', name: 'variable.language.raku'},
    {
      match: '\\b(?<![\\-:])(use|require|no|need)(?!\\-)\\b',
      name: 'keyword.other.include.raku'
    },
    {
      match:
        '(?x)\\b(?<![\\-:])( if|else|elsif|unless|with|orwith|without )(?!\\-)\\b',
      name: 'keyword.control.conditional.raku'
    },
    {
      match: '\\b(?<![\\-:])(let|my|our|state|temp|has|constant)(?!\\-)\\b',
      name: 'storage.modifier.declarator.raku'
    },
    {
      begin: '(?x) (?<= = | for ) \\s* ( < )',
      beginCaptures: {1: {name: 'span.keyword.operator.array.words.raku'}},
      contentName: 'string.array.words.raku',
      end: '(?x)  \\\\\\\\|(?<!\\\\) ( > )',
      endCaptures: {1: {name: 'span.keyword.operator.array.words.raku'}},
      patterns: [{include: 'source.quoting.raku#q_bracket_string_content'}]
    },
    {
      match: '(?x) (?: [+:\\-.*/] | \\|\\| )? (?<! = ) = (?! [>=~] )',
      name: 'storage.modifier.assignment.raku'
    },
    {
      begin:
        '(?x) (?<! \\+< | \\+\\s|\\+ ) \\s* (<) (?<! > ) (?= [^<]* (?: [^<] ) > )',
      beginCaptures: {1: {name: 'span.keyword.operator.array.words.raku'}},
      contentName: 'string.array.words.raku',
      end: '(?x) \\\\\\\\|(?<!\\\\) ( > )',
      endCaptures: {1: {name: 'span.keyword.operator.array.words.raku'}}
    },
    {
      match: '\\b(for|loop|repeat|while|until|gather|given)(?!\\-)\\b',
      name: 'keyword.control.repeat.raku'
    },
    {
      match:
        '(?x)\n\\b (?<! [\\-:.] )\n(\n   take|do|when|next|last|redo|return|return-rw\n  |contend|maybe|defer|default|exit|quietly\n  |continue|break|goto|leave|supply\n  |async|lift|await|start|react|whenever|parse\n)\n(?! - ) \\b',
      name: 'keyword.control.flowcontrol.raku'
    },
    {
      match: '(?x)\n\\b (?<! [\\-:] )\n(\n  make|made\n)\n(?! - ) \\b',
      name: 'keyword.control.flowcontrol.regex.raku'
    },
    {
      match:
        '(?x)\\b(?<![\\-:]) (is|does|as|but|trusts|of|returns|handles|where|augment|supersede) (?!\\-)\\b (?!\\s*=>)',
      name: 'storage.modifier.type.constraints.raku'
    },
    {
      match:
        '(?x)\\b(?<![\\-:])( BEGIN|CHECK|INIT |START|FIRST|ENTER |LEAVE|KEEP|UNDO |NEXT|LAST|PRE |POST|END|CATCH |CONTROL|TEMP|QUIT )(?!\\-)\\b',
      name: 'keyword.control.closure.trait.raku'
    },
    {
      match: '\\b(?<![\\-:])(die|fail|try|warn)(?!\\-)\\b(?!\\s*=>)',
      name: 'keyword.control.control-handlers.raku'
    },
    {
      match:
        '(?x)\\b(?<![\\-:])( prec|irs|ofs|ors|export|raw|deep |binary|unary|reparsed|rw|parsed |cached|readonly|defequiv|will |ref|copy|inline|tighter|looser |equiv|assoc|required|pure )(?!\\-)\\b  (?!\\s*=>)',
      name: 'entity.name.type.trait.raku'
    },
    {match: '\\b(NaN|Inf)(?!\\-)\\b', name: 'constant.numeric.raku'},
    {match: '\\b(True|False)\\b', name: 'constant.language.boolean.raku'},
    {
      match:
        '(?x)\\b(?<![\\-:])( fatal|internals| MONKEY\\-(?:TYPING|SEE\\-NO\\-EVAL|BRAINS|GUTS|BUSINESS|TRAP|SHINE|WRENCH|BARS)| nqp|QAST|strict|trace|worries|invocant|parameters|experimental| cur|soft|variables|attributes|v6(?:\\.\\w)*|lib|Test|NativeCall )(?!\\-) \\b (?!\\s*=>)',
      name: 'constant.language.pragma.raku'
    },
    {
      captures: {0: {name: 'support.type.exception.raku'}},
      match:
        '(?x)(?<![:\\-\\w]) (Backtrace|Exception|Failure|X) (?: \\:\\:[a-zA-Z]+ )* \\b'
    },
    {
      captures: {
        1: {name: 'support.type.raku'},
        2: {name: 'support.class.type.adverb.raku'}
      },
      match:
        '(?x)\\b(?<!:)(\n  AST|Any|Array|Associative|Attribute|Bag|BagHash|Baggy|\n  Blob|Block|Bool|Callable|Capture|Channel|Code|Complex|Cool|\n  CurrentThreadScheduler|Cursor|Date|DateTime|Dateish|Duration|\n  Enum|FatRat|Grammar|Hash|IO|Instant|Iterable|\n  Iterator|Junction|Label|List|Lock|Macro|Map|Match|Metamodel|\n  Method|Mix|MixHash|Mixy|Mu|Nil|Numeric|ObjAt|Pair|\n  Parameter|Pod|Positional|PositionalBindFailover|Proc|Promise|\n  Proxy|QuantHash|Range|Rat|Rational|Real|Regex|Routine|Scheduler|\n  Seq|Set|SetHash|Setty|Signature|Slip|Stash|Str|str|Stringy|Sub|\n  Submethod|Supply|Tap|Temporal|Thread|ThreadPoolScheduler|\n  Variable|Version|Whatever|WhateverCode|bool|size_t|\n  Int|int|int1|int2|int4|int8|int16|int32|int64|\n  Rat|rat|rat1|rat2|rat4|rat8|rat16|rat32|rat64|\n  Buf|buf|buf1|buf2|buf4|buf8|buf16|buf32|buf64|\n  UInt|uint|uint1|uint2|uint4|uint8|uint16|uint32|uint64|\n  utf8|utf16|utf32|Num|num|num32|num64|IntStr|NumStr|\n  RatStr|ComplexStr|CArray|Pointer|long|longlong|\n  # These are for types which have sub types\n  Order|More|Less|Same\n)\\b (?!\\s*=>)'
    },
    {match: '(?x) ( \\[ / \\] )', name: 'keyword.operator.reduction.raku'},
    {
      captures: {
        1: {name: 'keyword.operator.adverb.raku'},
        2: {name: 'keyword.other.special-method.definedness.raku'}
      },
      match: '(?<=\\w)(\\:)([DU_])\\b',
      name: 'meta.adverb.definedness.raku'
    },
    {
      match:
        '(?x)\\b( div|mod|gcd|lcm|x|xx|temp|let|but|cmp|leg| eq|ne|gt|ge|lt|le|before|after|eqv|min|max|ff|fff|not|so|Z| and|andthen|or|orelse )\\b(?!\\-)| \\b(X)(?!:)\\b',
      name: 'keyword.operator.word.raku'
    },
    {
      captures: {1: {name: 'keyword.operator.approx-equal.raku'}},
      match: '(=~=|≅)',
      name: 'meta.operator.non.ligature.raku'
    },
    {
      match:
        '(?x) <== | ==> | <=> | => | --> | -> | \\+\\| | \\+\\+ | -- | \\*\\* | \\?\\?\\? | \\?\\? | \\!\\!\\! | \\!\\! | && | \\+\\^ | \\?\\^ | %% | \\+& | \\+< | \\+> | \\+\\^ | \\.\\.(?!\\.) | \\.\\.\\^ | \\^\\.\\. | \\^\\.\\.\\^ | \\?\\| | !=(?!\\=) | !==(?!\\=) | <=(?!>) | >= | === | == | =:= | ~~ | \\x{2245} | \\|\\| | \\^\\^ | \\/\\/ | := | ::= | \\.\\.\\.',
      name: 'keyword.operator.multi-symbol.raku'
    },
    {include: '#special_variables'},
    {
      captures: {
        1: {name: 'constant.language.whatever.raku'},
        2: {name: 'keyword.operator.minus.back-from.raku'},
        3: {name: 'constant.numeric.back-from.raku'}
      },
      match:
        '(?x)(?<=\\[) \\s* (\\*) \\s* ([\\-\\*%\\^\\+\\/]|div|mod|gcd|lcm) \\s* (\\d+) \\s* (?=\\])',
      name: 'meta.subscript.whatever.raku'
    },
    {match: '\\*\\s*(?=\\])', name: 'constant.language.whatever.hack.raku'},
    {
      captures: {1: {name: 'keyword.operator.colon.raku'}},
      match: '(?x)\\b(?<![\\-\\\\])( :: )?(exists)(?!\\-)\\b(?!\\s*=>)',
      name: 'support.function.raku'
    },
    {
      captures: {1: {name: 'keyword.operator.colon.raku'}},
      match:
        '(?x)\\b(?<![\\-:\\\\])( :: )?( eager|hyper|substr|index|rindex|grep|map|sort|join|lines|hints |chmod|split|reduce|min|max|reverse|truncate|zip|cat|roundrobin |classify|first|sum|keys|values|pairs|defined|delete|exists |elems|end|kv|any|all|one|wrap|shape|key|value|name|pop|push |shift|splice|unshift|floor|ceiling|abs|exp|log|log10|rand|sign |sqrt|sin|cos|tan|round|strand|roots|cis|unpolar|polar|atan2 |pick|chop|chomp|lc|lcfirst|uc|ucfirst|capitalize|mkdir |normalize|pack|unpack|quotemeta|comb|samecase|sameaccent|chars |nfd|nfc|nfkd|nfkc|printf|sprintf|caller|evalfile|run|runinstead |nothing|want|bless|chr|ord|ords|gmtime|time|eof|localtime|gethost |getpw|chroot|getlogin|getpeername|kill|fork|wait|perl|graphs |codes|bytes|clone|print|open|read|write|readline|say|seek|close |opendir|readdir|slurp|spurt|shell|run|pos|fmt|vec|link|unlink |symlink|unique|pair|asin|atan|sec|cosec|cotan|asec|acosec|acotan |sinh|cosh|tanh|asinh|done|acos|acosh|atanh|sech|cosech|cotanh |sech|acosech|acotanh|asech|ok|nok|plan-ok|dies-ok|lives-ok|skip |todo|pass|flunk|force-todo|use-ok|isa-ok|diag|is-deeply|isnt |like|skip-rest|unlike|cmp-ok|eval-dies-ok|nok-error|cmp-ok |eval-lives-ok|approx|is-approx|throws-ok|version-lt|plan|EVAL |succ|pred|times|nonce|once|signature|new|connect|operator|undef |undefine|sleep|from|to|infix|postfix|prefix|circumfix|can-ok |postcircumfix|minmax|lazy|count|unwrap|getc|pi|tau|context|void |quasi|body|each|contains|rewinddir|subst|can|isa|flush|arity |assuming|rewind|callwith|callsame|nextwith|nextsame|attr|does-ok |eval-elsewhere|none|not|srand|so|trim|trim-start|trim-end|lastcall |WHAT|WHY|WHERE|HOW|WHICH|VAR|WHO|WHENCE|ACCEPTS|REJECTS|not |iterator|by|re|im|invert|flip|gist|flat|tree|is-prime |throws-like|trans|race|hyper|tap|emit|done-testing|quit|dd|note |prepend|categorize|antipairs|categorize-list|parse-base|base |starts-with|ends-with|put|append|tail|\\x{03C0}|\\x{03C4}|\\x{212F} |get|words|new-from-pairs|uniname|uninames|uniprop|uniprops |slurp-rest|throw|break|keep|match|trim-leading|trim-trailing |is-lazy|pull-one|push-exactly|push-at-least|push-all|push-until-lazy |sink-all|skip-at-least|skip-at-least-pull-one )(?!\\-)\\b(?!\\s*=>)',
      name: 'support.function.raku'
    },
    {
      match:
        '(?x)\\b(?<![\\-:]|\\\\)(?<=\\.) (e|d|f|s|l|r|w|rw|x|rwx|z|abspath|basename|extension|dirname |watch|is-absolute|parts|volume|path|is-relative|parent|child |resolve|dir) (?!\\-)\\b(?!\\s*=>)',
      name: 'support.function.raku'
    },
    {include: '#numbers'},
    {
      match:
        '(?x) (?<!\\(|\\*)\\%| [\\^\\+><\\*\\!\\?~\\/\\|]| (?<!\\$)\\.| (?<!:):(?!:)| (?<=\\s)\\-(?=[\\s\\(\\{\\[])| (?<!\\w)[o\\x{2218}](?!\\w)',
      name: 'keyword.operator.generic.raku'
    },
    {
      match: "(?x) (?<=^|\\W|\\s) ([\\w'\\-]+) \\s* (?= =>)",
      name: 'string.pair.key.raku'
    },
    {
      match:
        "(?x) \\b (?<!\\d) ([a-zA-Z_\\x{c0}-\\x{ff}\\$]) ( [a-zA-Z0-9_\\x{c0}-\\x{ff}\\$]| [\\-'][a-zA-Z_\\x{c0}-\\x{ff}\\$][a-zA-Z0-9_\\x{c0}-\\x{ff}\\$] )*",
      name: 'routine.name.raku'
    },
    {
      begin: '(?<=\\:)(\\d+)(<)',
      beginCaptures: {
        1: {name: 'support.type.radix.raku'},
        2: {name: 'punctuation.definition.radix.raku'}
      },
      contentName: 'constant.numeric.raku',
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.radix.raku'}}
    },
    {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.raku'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.raku'}},
      name: 'meta.block.raku',
      patterns: [{include: '$self'}]
    }
  ],
  repository: {
    'comment-block-abbreviated': {
      patterns: [
        {
          begin: '^\\s*(=)(head\\w*)\\s+(.+?)\\s*$',
          captures: {
            1: {name: 'storage.modifier.block.abbreviated.raku'},
            2: {name: 'entity.other.attribute-name.block.abbreviated.raku'},
            3: {
              name: 'entity.name.section.abbreviated.raku',
              patterns: [{include: '#comment-block-syntax'}]
            }
          },
          contentName: 'entity.name.section.head.abbreviated.raku',
          end: '(?=^\\s*$|^\\s*=\\w+.*$)',
          patterns: [{include: '#comment-block-syntax'}]
        },
        {
          begin: '^\\s*(=)(\\w+)\\s+(.+?)\\s*$',
          captures: {
            1: {name: 'storage.modifier.block.abbreviated.raku'},
            2: {name: 'entity.other.attribute-name.block.abbreviated.raku'},
            3: {
              name: 'entity.name.section.abbreviated.raku',
              patterns: [{include: '#comment-block-syntax'}]
            }
          },
          contentName: 'comment.block.abbreviated.raku',
          end: '(?=^\\s*$|^\\s*=\\w+.*$)',
          patterns: [{include: '#comment-block-syntax'}]
        }
      ]
    },
    'comment-block-delimited': {
      patterns: [
        {
          begin: '^\\s*(=)(begin)\\s+(\\w+)',
          captures: {
            1: {name: 'storage.modifier.block.delimited.raku'},
            2: {name: 'keyword.operator.block.delimited.raku'},
            3: {name: 'entity.other.attribute-name.block.delimited.raku'}
          },
          contentName: 'comment.block.delimited.raku',
          end: '^\\s*(=)(end)\\s+(\\w+)',
          patterns: [{include: '#comment-block-syntax'}]
        }
      ]
    },
    'comment-block-syntax': {
      patterns: [
        {include: '#comment-block-delimited'},
        {include: '#comment-block-abbreviated'},
        {
          begin: '(?x) (U) (<<<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.underline.raku',
          end: '(?x) (>>>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_triple_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (I) (<<<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.italic.raku',
          end: '(?x) (>>>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_triple_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (B) (<<<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.bold.raku',
          end: '(?x) (>>>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_triple_angle_string_content'}
          ]
        },
        {
          begin: '(?x) ([A-Z]) (<<<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.raw.code.raku',
          end: '(?x) (>>>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_triple_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (U) (<<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.underline.raku',
          end: '(?x) (>>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_double_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (I) (<<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.italic.raku',
          end: '(?x) (>>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_double_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (B) (<<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.bold.raku',
          end: '(?x) (>>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_double_angle_string_content'}
          ]
        },
        {
          begin: '(?x) ([A-Z]) (<<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.raw.code.raku',
          end: '(?x) (>>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_double_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (U) (<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.underline.raku',
          end: '(?x) (>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (I) (<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.italic.raku',
          end: '(?x) (>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (B) (<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.bold.raku',
          end: '(?x) (>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_angle_string_content'}
          ]
        },
        {
          begin: '(?x) ([A-Z]) (<)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.raw.code.raku',
          end: '(?x) (>)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_angle_string_content'}
          ]
        },
        {
          begin: '(?x) (U) («)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.underline.raku',
          end: '(?x) (»)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_chevron_string_content'}
          ]
        },
        {
          begin: '(?x) (I) («)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.italic.raku',
          end: '(?x) (»)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_chevron_string_content'}
          ]
        },
        {
          begin: '(?x) (B) («)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.bold.raku',
          end: '(?x) (»)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_chevron_string_content'}
          ]
        },
        {
          begin: '(?x) ([A-Z]) («)',
          beginCaptures: {
            1: {name: 'support.function.pod.code.raku'},
            2: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          contentName: 'markup.raw.code.raku',
          end: '(?x) (»)',
          endCaptures: {
            1: {name: 'punctuation.section.embedded.pod.code.raku'}
          },
          name: 'meta.pod.c.raku',
          patterns: [
            {include: '#comment-block-syntax'},
            {include: 'source.quoting.raku#q_chevron_string_content'}
          ]
        }
      ]
    },
    hex_escapes: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.punctuation.hex.raku'},
            2: {name: 'keyword.operator.bracket.open.raku'},
            3: {name: 'routine.name.hex.raku'},
            4: {name: 'keyword.operator.bracket.close.raku'}
          },
          match: '(?x) (\\\\x) ( \\[ ) ( [\\dA-Fa-f]+ ) ( \\] )',
          name: 'punctuation.hex.raku'
        }
      ]
    },
    interpolation: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.identifier.sigil.raku'},
            2: {name: 'support.class.twigil.interpolated.raku'},
            5: {
              patterns: [
                {
                  begin: '<',
                  beginCaptures: {
                    0: {name: 'keyword.operator.chevron.open.raku'}
                  },
                  end: '>',
                  endCaptures: {
                    0: {name: 'keyword.operator.chevron.close.raku'}
                  }
                },
                {
                  begin: '\\[',
                  beginCaptures: {
                    0: {name: 'keyword.operator.bracket.open.raku'}
                  },
                  end: '\\]',
                  endCaptures: {
                    0: {name: 'keyword.operator.bracket.close.raku'}
                  },
                  patterns: [{include: '$self'}]
                }
              ]
            },
            6: {name: 'keyword.operator.dot.raku'},
            7: {name: 'support.function.raku'},
            8: {
              begin: '\\(',
              beginCaptures: {0: {name: 'keyword.operator.paren.open.raku'}},
              end: '\\)',
              endCaptures: {0: {name: 'keyword.operator.paren.close.raku'}},
              patterns: [{include: '$self'}]
            }
          },
          match:
            "(?x)\n(?<!\\\\)\n(\\$|@|%|&)\n(?!\\$)\n(\\.|\\*|:|!|\\^|~|=|\\?)?  # Twigils\n([\\pL\\pM_])             # Must start with Alpha or underscore\n(\n   [\\p{Nd}\\pL\\pM_]  # have alphanum/underscore, or a ' or -\n|                           # followed by an Alpha or underscore\n   [\\-'] [\\pL\\pM_]\n)*\n( \\[ .* \\] )?             # postcircumfix [ ]\n## methods\n(?:\n  (?:\n    ( \\. )\n    (\n       [\\pL\\pM]\n        (?:\n          [\\p{Nd}\\pL\\pM_]  # have alphanum/underscore, or a ' or -\n        |                          # followed by an Alpha or underscore\n          [\\-'] [\\pL\\pM_]\n        )*\n\n    )\n  )?\n  ( \\( .*?  \\) )\n)?",
          name: 'variable.other.identifier.interpolated.raku'
        },
        {include: '#hex_escapes'},
        {include: '#regexp-variables'},
        {
          begin: '(?x) (?<! m|rx|m:i|rx:i) (\\{)',
          beginCaptures: {1: {name: 'punctuation.section.embedded.begin.raku'}},
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.section.embedded.end.raku'}},
          name: 'meta.interpolation.raku',
          patterns: [{include: '$self'}]
        }
      ]
    },
    numbers: {
      patterns: [
        {
          match:
            '(?x)\n(?<= ^ | [=,;^\\s{\\[(/] | \\.\\. )\n[-−+]?\n0[bodx]\\w+',
          name: 'constant.numeric.radix.raku'
        },
        {
          match:
            '(?x)\n          (?<= ^ | [×÷*=,:;^\\s{\\[(/] | \\.\\. | … )\n          (?: \\^? [+\\-−] )?\n(?:\n    (?: \\d+ (?: [\\_\\d]+ \\d )? )\n    (?: \\.  \\d+ (?: [\\_\\d]+ \\d )? )?\n)\n(?:  e  (?:-|−)? \\d+ (?: [\\_\\d]+ \\d )? )?',
          name: 'constant.numeric.raku'
        },
        {
          match:
            '(?x)\n          (?<= ^ | [×÷*=,:;^\\s{\\[(/] | \\.\\. )\n          (?: [+-−] )?\n(?:\n    (?: \\.  \\d+ (?: [\\_\\d]+ \\d )? )\n)\n(?:  e  (?:-|−)? \\d+ (?: [\\_\\d]+ \\d )? )?',
          name: 'constant.numeric.raku'
        }
      ]
    },
    p5_escaped_char: {
      patterns: [
        {match: '\\\\\\d+', name: 'constant.character.escape.perl'},
        {match: '\\\\c[^\\s\\\\]', name: 'constant.character.escape.perl'},
        {
          match: '\\\\g(?:\\{(?:\\w*|-\\d+)\\}|\\d+)',
          name: 'constant.character.escape.perl'
        },
        {
          match: "\\\\k(?:\\{\\w*\\}|<\\w*>|'\\w*')",
          name: 'constant.character.escape.perl'
        },
        {match: '\\\\N\\{[^\\}]*\\}', name: 'constant.character.escape.perl'},
        {match: '\\\\o\\{\\d*\\}', name: 'constant.character.escape.perl'},
        {
          match: '\\\\(?:p|P)(?:\\{\\w*\\}|P)',
          name: 'constant.character.escape.perl'
        },
        {
          match: '\\\\x(?:[0-9a-zA-Z]{2}|\\{\\w*\\})?',
          name: 'constant.character.escape.perl'
        },
        {match: '\\\\.', name: 'constant.character.escape.perl'}
      ]
    },
    p5_regex: {
      patterns: [
        {
          begin:
            '(?x)(?<![\\w\\/])(m|rx) \\s*((?:\\s*:\\w+)*)?(:P5)((?:\\s*:\\w+)*)?\\s* (\\{)',
          beginCaptures: {
            1: {name: 'string.regexp.construct.raku'},
            2: {name: 'entity.name.section.adverb.regexp.raku'},
            3: {name: 'entity.name.section.p5.adverb.regexp.raku'},
            4: {name: 'entity.name.section.adverb.regexp.raku'},
            5: {name: 'punctuation.definition.regexp.raku'}
          },
          contentName: 'string.regexp.p5.raku',
          end: '(?<!\\\\)(\\})([gmixXsuUAJ]+)?',
          endCaptures: {
            1: {name: 'punctuation.definition.regexp.raku'},
            2: {name: 'invalid.illegal.p5.regexp.modifier.raku'}
          },
          patterns: [
            {include: '#p5_escaped_char'},
            {include: 'source.quoting.raku#q_brace_string_content'}
          ]
        },
        {
          begin:
            '(?x)(?<![\\w\\/])(m|rx) \\s*((?:\\s*:\\w+)*)?(:P5)((?:\\s*:\\w+)*)?\\s* (\\[)',
          beginCaptures: {
            1: {name: 'string.regexp.construct.raku'},
            2: {name: 'entity.name.section.adverb.regexp.raku'},
            3: {name: 'entity.name.section.p5.adverb.regexp.raku'},
            4: {name: 'entity.name.section.adverb.regexp.raku'},
            5: {name: 'punctuation.definition.regexp.raku'}
          },
          contentName: 'string.regexp.p5.raku',
          end: '(?<!\\\\)(\\])([gmixXsuUAJ]+)?',
          endCaptures: {
            1: {name: 'punctuation.definition.regexp.raku'},
            2: {name: 'invalid.illegal.p5.regexp.modifier.raku'}
          },
          patterns: [
            {include: '#p5_escaped_char'},
            {include: 'source.quoting.raku#q_bracket_string_content'}
          ]
        },
        {
          begin:
            '(?x)(?<![\\w\\/])(m|rx) \\s*((?:\\s*:\\w+)*)?(:P5)((?:\\s*:\\w+)*)?\\s* (\\/)',
          beginCaptures: {
            1: {name: 'string.regexp.construct.raku'},
            2: {name: 'entity.name.section.adverb.regexp.raku'},
            3: {name: 'entity.name.section.p5.adverb.regexp.raku'},
            4: {name: 'entity.name.section.adverb.regexp.raku'},
            5: {name: 'punctuation.definition.regexp.raku'}
          },
          contentName: 'string.regexp.p5.raku',
          end: '(?<!\\\\)(\\/)([gmixXsuUAJ]+)?',
          endCaptures: {
            1: {name: 'punctuation.definition.regexp.raku'},
            2: {name: 'invalid.illegal.p5.regexp.modifier.raku'}
          },
          patterns: [
            {include: '#p5_escaped_char'},
            {include: 'source.quoting.raku#q_slash_string_content'}
          ]
        }
      ]
    },
    q_right_double_right_double_string_content: {
      begin: '”',
      end: '”',
      patterns: [{include: '#q_right_double_right_double_string_content'}]
    },
    'regexp-variables': {
      patterns: [
        {
          begin: '\\$(?=\\<)',
          beginCaptures: {
            0: {name: 'variable.other.identifier.sigil.regexp.perl6'}
          },
          end: '(?![\\w\\<\\>])',
          name: 'meta.match.variable.raku',
          patterns: [
            {
              captures: {
                1: {name: 'support.class.match.name.delimiter.regexp.raku'},
                2: {name: 'variable.other.identifier.regexp.perl6'},
                3: {name: 'support.class.match.name.delimiter.regexp.raku'}
              },
              match: '(\\<)([\\w\\-]+)(\\>)'
            }
          ]
        }
      ]
    },
    shellquotes: {
      patterns: [
        {
          begin: '([qQ]x)\\s*({{)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '}}',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.single.raku',
          patterns: [{include: 'source.quoting.raku#q_single_string_content'}]
        },
        {
          begin: '([qQ]x)\\s*({)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.single.raku',
          patterns: [{include: 'source.quoting.raku#q_single_string_content'}]
        },
        {
          begin: '([qQ]x)\\s*(\\[\\[)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '\\]\\]',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.single.raku',
          patterns: [{include: 'source.quoting.raku#q_single_string_content'}]
        },
        {
          begin: '([Qq]x)\\s*(\\[)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.single.raku',
          patterns: [{include: 'source.quoting.raku#q_single_string_content'}]
        },
        {
          begin: '([Qq]x)\\s*(\\|)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '\\|',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.single.raku',
          patterns: [{include: 'source.quoting.raku#q_single_string_content'}]
        },
        {
          begin: '([Qq]x)\\s*(\\/)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '(?<!\\\\)\\/',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.single.raku',
          patterns: [
            {match: '\\\\\\/', name: 'constant.character.escape.raku'},
            {include: 'source.quoting.raku#q_single_string_content'}
          ]
        },
        {
          begin: '(qqx)\\s*({{)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '}}',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.double.raku',
          patterns: [
            {include: '#interpolation'},
            {include: '#variables'},
            {include: 'source.shell'}
          ]
        },
        {
          begin: '(qqx)\\s*({)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.double.raku',
          patterns: [
            {include: '#interpolation'},
            {include: '#variables'},
            {include: 'source.shell'}
          ]
        },
        {
          begin: '(qqx)\\s*(\\[\\[)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '\\]\\]',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.double.raku',
          patterns: [
            {include: '#interpolation'},
            {include: '#variables'},
            {include: 'source.shell'}
          ]
        },
        {
          begin: '(qqx)\\s*(\\[)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.double.raku',
          patterns: [
            {include: '#interpolation'},
            {include: '#variables'},
            {include: 'source.shell'}
          ]
        },
        {
          begin: '(qqx)\\s*(\\|)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '\\|',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.double.raku',
          patterns: [
            {include: '#interpolation'},
            {include: '#variables'},
            {include: 'source.shell'}
          ]
        },
        {
          begin: '(qqx)\\s*(\\/)',
          beginCaptures: {
            1: {name: 'string.quoted.q.shell.operator.raku'},
            2: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          end: '(?<!\\\\)\\/',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.shell.begin.raku'}
          },
          name: 'meta.shell.quote.double.raku',
          patterns: [
            {match: '\\\\\\/', name: 'constant.character.escape.raku'},
            {include: '#interpolation'},
            {include: '#variables'},
            {include: 'source.shell'}
          ]
        }
      ]
    },
    special_variables: {
      patterns: [
        {
          match:
            '(?x) [\\$\\@](?=[\\s,;\\{\\[\\(])| (?<=[\\(\\,])\\s*%(?![\\w\\*\\!\\?\\.\\^:=~])| \\$_| \\$\\/| \\$\\!(?!\\w)| \\$\\d(?!\\w)',
          name: 'keyword.other.special-method.raku'
        }
      ]
    },
    variables: {
      patterns: [
        {include: '#regexp-variables'},
        {
          captures: {
            1: {name: 'variable.other.identifier.sigil.raku'},
            2: {name: 'support.class.twigil.raku'},
            3: {name: 'variable.other.identifier.raku'}
          },
          match:
            "(?x)\n(\\$|@|%|&)\n(\\.|\\*|:|!|\\^|~|=|\\?)?\n(\n    (?:[\\pL\\pM_])           # Must start with Alpha or underscore\n    (?:\n       [\\p{Nd}\\pL\\pM_]  # have alphanum/underscore, or a ' or -\n    |                           # followed by an Alpha or underscore\n       [\\-'] [\\pL\\pM_]\n    )*\n)",
          name: 'meta.variable.container.raku'
        }
      ]
    }
  },
  scopeName: 'source.raku'
}

export default grammar
