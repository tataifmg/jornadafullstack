import React, {useState} from 'react'
/*useState é utilizado no react para saber o estado de um objeto/caixinha*/ 
import "./VideoSideBar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
/*Importação de uma biblioteca de icones*/

function VideoSideBar({likes, messages, shares}) {
    const[liked, setLiked]= useState(false)
    /*Variavel constante que possui o estado falso */
    function handdleLike(){
        setLiked(!liked)
    }

    return (
        <div className='videoSidebar'>
            <div 
                className='videoSidebar_options'
                /*Mapeia essa div e chama uma função se a mesma for clicada*/
                onClick={handdleLike}>

                    {liked ? <FavoriteIcon fontSize='large'/>: <FavoriteBorderIcon fontSize='large'/> }
                    
                    <p>{liked ? likes +1 : likes}</p>
                    {/* Uliza chave para avisar que é uma logica javascript, o codigo acima realiza um if para que 
                        caso a a div seja clickada(==true) troque o icone e se não(else) mantenha o mesmo */}
            </div>

            <div className='videoSidebar_options'>
                <ChatIcon fontSize='large' className='patternIcon'/*chama um objeto/classe, n lembro o nome, para essa pagina*//>
                <p>{messages}</p>
            </div>
            <div className='videoSidebar_options'>
                <ShareIcon fontSize='large' className='patternIcon'/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar