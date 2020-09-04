import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

import MainBar from '../src/components/MainBar.tsx'

import Head from 'next/head'
import Intro from '../src/components/Intro.tsx'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
})

export default function Home() {
  const style = useStyles()

  return (
    <main>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Content of my site" />
      </Head>

      <MainBar>
        <Intro />
      </MainBar>
    </main>
  )
}
