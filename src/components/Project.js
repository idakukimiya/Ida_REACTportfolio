import React from 'react';
import GTC3 from './image/GTC3.png';
import arthub from './image/arthub.png';
import README from './image/contact.jpg';
import WDS from './image/WDS.png';
import allyform from './image/contact.jpg';
import pwgenerator from './image/pwgenerator.png';

export default function Project() {
    const projArray = [
        {
            title: 'Git That Currency',
            projImgAlt: 'G.T.C Screenshot',
            deployedLink: 'https://idakukimiya.github.io/GitThatCurrency3/',
            gitRepo: 'https://github.com/idakukimiya/GitThatCurrency3'
        },
        {
            title: 'arthub',
            projImgAlt: 'arthub Screenshot',
            deployedLink: 'https://blooming-refuge-04139.herokuapp.com/',
            gitRepo: 'https://github.com/idakukimiya/arthub'
        },
        {
            title: 'pixel-battle',
            projImgAlt: 'dungeon Screenshot',
            gitRepo: 'https://github.com/idakukimiya/pixel-battle78'
        },
        {
            title: 'Work Day Scheduler',
            projImgAlt: 'W.D.S Screenshot',
            deployedLink: 'https://idakukimiya.github.io/humdrum_index/',
            gitRepo: 'https://github.com/idakukimiya/humdrum_index'
        },
        {
            title: 'Ally Forum',
            gitRepo: 'https://github.com/idakukimiya/ally_forum'
        },
        {
            title: 'Password Generator',
            projImgAlt: 'Password Generator Screenshot',
            deployedLink: 'https://idakukimiya.github.io/open-sesame/',
            gitRepo: 'https://github.com/idakukimiya/open-sesame'
        },
    ]

    return (
        <div className="m-3">
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h2 className="allheaders">{projArray[0].title}</h2>
                        <a href={projArray[0].deployedLink} target="blank"><img alt={projArray[0].projImgAlt} src={GTC3} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[0].gitRepo}><button className="btn btn-warning">For Project Info</button></a>
                    </div>
                    <div className="col">
                        <h3 className="allheaders">{projArray[1].title}</h3>
                        <a href={projArray[1].deployedLink} target="blank"><img alt={projArray[1].projImgAlt} src={arthub} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[1].gitRepo}><button className="btn btn-danger">For Project Info</button></a>
                    </div>
                    <div className="col">
                        <h4 className="allheaders">{projArray[2].title}</h4>
                        <a href={projArray[2].deployedLink} target="blank"><img alt={projArray[2].projImgAlt} src={README} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[2].gitRepo}><button className="btn btn-info">For Project Info</button></a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col">
                        <h5 className="allheaders">{projArray[3].title}</h5>
                        <a href={projArray[3].deployedLink} target="blank"><img alt={projArray[3].projImgAlt} src={WDS} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[3].gitRepo}><button className="btn btn-success">For Project Info</button></a>
                    </div>
                    <div className="col">
                        <h6 className="allheaders">{projArray[4].title}</h6>
                        <a href={projArray[4].deployedLink} target="blank"><img alt={projArray[4].projImgAlt} src={allyform} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[4].gitRepo}><button className="btn btn-secondary">For Project Info</button></a>
                    </div>
                    <div className="col">
                        <h7 className="allheaders">{projArray[5].title}</h7>
                        <a href={projArray[5].deployedLink} target="blank"><img alt={projArray[5].projImgAlt} src={pwgenerator} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[5].gitRepo}><button className="btn btn-dark">For Project Info</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}