import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';
import SlidePage from '../layouts/SlidePage'
import RevealList from './RevealList'
import Cover from './Cover'
import CountDown from './CountDown'
import SpeakerNotes from './SpeakerNotes'

const mdComponents = {
  h1: (props) => <h1 {...props} />,
  pre: (props) => props.children,
  code: (props) => {
    const { className } = props
    const language = className.replace('language-', '')
    return (
      <SyntaxHighlighter
        showLineNumbers
        wrapLines
        className={className}
        language={language}
        style={atomOneDark}
        containerStyle={{padding: '1rem' }}
        {...props}
      />
    )
  },
  Cover,
  SlidePage,
  CountDown,
  SpeakerNotes,
  RevealList,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
