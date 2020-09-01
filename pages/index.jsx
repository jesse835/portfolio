import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

import Head from 'next/head'

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
      <div className={style.container}>
        <div>Test home page</div>
        <br />

        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </main>
  )
}
