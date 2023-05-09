import React, { useState } from 'react'
import Head from 'next/head'
import arabela from '../assets/arabela.jpg'
import Singers from '../assets/Singers.svg'
import Image from 'next/image'
import {
  ArtistIcon,
  Container,
  Instagram,
  Page,
  TextContainer
} from '../styles/pages/Home'
import { GiGuitarBassHead } from 'react-icons/gi'
import ArtistsAndSongs from '../components/Artists/ArtistAndSongs'
import BandMembers from '../components/BandMembers/BandMembers'
import { Button } from '@mui/material'
import { BsInstagram } from 'react-icons/bs'

const Home: React.FC = () => {
  const artistsAndSongs = [
    {
      artistName: 'ColdPlay',
      songs: ['Viva La Vida', 'Clocks', 'Yellow']
    },
    {
      artistName: 'Pink Floyd',
      songs: ['Time', 'Another Brick In The Wall', 'Us And Them']
    },
    {
      artistName: 'Red Hot Chilli Peppers',
      songs: ['Scartissue', 'Soul To Squeeze', 'Californication']
    },
    {
      artistName: 'Alceu Valenção',
      songs: ['Tu vens']
    }
  ]

  const bandMembers = [
    {
      id: 1,
      name: 'Gustavo Faria',
      instagram: 'gbcfaria',
      instrument: 'Baixo'
    },
    {
      id: 2,
      name: 'João Dias',
      instagram: 'jdays__',
      instrument: 'Voz e Guitarra'
    },
    {
      id: 3,
      name: 'Mateus Nagy',
      instagram: 'mateusnagy',
      instrument: 'Bateria'
    }
  ]
  return (
    <Page>
      <Head>
        <title>Arabela App</title>
      </Head>
      <div
        style={{
          display: 'flex',
          marginTop: '-10%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image src={arabela} alt="arabela-logo" height="300" width="300" />
        <Instagram>
          <Button
            color="inherit"
            onClick={() =>
              window.open(
                `https://www.instagram.com/arabela.banda`,
                '_blank',
                'noreferrer'
              )
            }
          >
            <BsInstagram />
            &nbsp;&nbsp; arabela.banda
          </Button>
        </Instagram>
      </div>

      <Container>
        <TextContainer>
          <h1>
            Você pede, <br /> nós tocamos! <GiGuitarBassHead />
          </h1>
          <p>Escolha uma das músicas do nosso repertório e é só aguardar.</p>
        </TextContainer>
        <ArtistIcon>
          <Singers />
          <p>Artistas</p>
        </ArtistIcon>
        <ArtistsAndSongs artists={artistsAndSongs} />
      </Container>
      <BandMembers members={bandMembers} />
    </Page>
  )
}
export default Home
