import React from 'react';
import './card.css';


export default function Projects() {

    return (
        <>
        <div className='container'>
            <h1>projects</h1>

        </div>
        <br></br><br></br><br></br>
        <div className='container'>
            
            <div className='row'>
            <div className="card transition ">
                <h2 className="transition h2">Maths Website</h2>
                <div className='container'>
                <p className='p2'><strong>Description :-</strong>A simple Mathematics course landing Webpage 
                <br></br>
                <strong>Tech-Stack :-</strong>HTML, CSS
                </p>
                </div>
                <div className="cta-container transition"><a href="#" className="cta"><span className='fa fa-eye fa-lg'></span> &nbsp;&nbsp;View Project</a></div>
                <div className="card_circle transition"></div>
            </div>

            <div className="card transition ">
                <h2 className="transition h2">Maths Game</h2>
                <div className='container'>
                <p className='p2'>
                <strong>Description :-</strong>A Math Quiz game, which checks basic Multiplications 
                <br></br>
                <strong>Tech-Stack :-</strong>HTML, CSS, JS, jQuery
                </p>
                </div>
                <div className="cta-container transition"><a href="#" className="cta"><span className='fa fa-eye fa-lg'></span> &nbsp;&nbsp;View Project</a></div>
                <div className="card_circle transition"></div>
            </div>
            <div className="card transition ">
                <h2 className="transition h2">Hotel ManageMent</h2>
                <div className='container'>
                <p className='p2'>
                <strong>Description :-</strong>A Hotel centric Website which reduces human interaction 
                <br></br>
                <strong>Tech-Stack :-</strong>HTML, CSS, JS, jQuery
                </p>
                </div>
                <div className="cta-container transition"><a href="#" className="cta"><span className='fa fa-eye fa-lg'></span> &nbsp;&nbsp;View Project</a></div>
                <div className="card_circle transition"></div>
            </div>

            </div>
            <br></br><br></br><br></br>
<div className='container'>
<div className='row'>
            <div className="card transition ">
                <h2 className="transition h2">Resource allocator</h2>
                <div className='container'>
                <p className='p2'><strong>Description :-</strong>A website which is used to manage/allocate the resources
                <br></br>
                <strong>Tech-Stack :-</strong>HTML, CSS, JS, jQuery
                </p>
                </div>
                <div className="cta-container transition"><a href="#" className="cta"><span className='fa fa-eye fa-lg'></span> &nbsp;&nbsp;View Project</a></div>
                <div className="card_circle transition"></div>
            </div>
            <div className="card transition ">
                <h2 className="transition h2">Restraunt Website</h2>
                <div className='container'>
                <p className='p2'>
                <strong>Description :-</strong>Restraunt landing page featuring dishes
                <br></br>
                <strong>Tech-Stack :-</strong>CSS, Bootstrap, React.js
                </p>
                </div>
                <div className="cta-container transition"><a href="#" className="cta"><span className='fa fa-eye fa-lg'></span> &nbsp;&nbsp;View Project</a></div>
                <div className="card_circle transition"></div>
            </div>
            
        </div>
</div>

        </div>
</>
    );
}