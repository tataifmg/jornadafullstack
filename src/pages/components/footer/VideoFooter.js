import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3> @Tata ebac</h3>
            <p>Descrição do video</p>
            <div className='videoFooter_music'>
                <MusicNoteIcon className='videoFooter_icon'/>
                <div className='videoFooterMusic_text'>
                    <p>Titulo da musica</p>
                </div>
            </div>
        </div>
        <img
            className='videoFooter_record'
            alt='Imagem de um vinil girando '
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
        />
    </div>
  )
}

export default VideoFooter