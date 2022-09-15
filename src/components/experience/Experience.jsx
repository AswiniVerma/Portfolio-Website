import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I have to offer</h5>
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>SQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>NoSql</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div><h4>JavaScript</h4>
            <small className='text-light'>Basic</small></div>
            </article>
            </div>
          </div>
          <div className="experience__backend">
          <h3>Tools/Platforms</h3>
          <div className="experience__content">
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div>
            <h4>Git</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div>
          <h4>VSCode</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div>
          <h4>Android Studio</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div>
          <h4>PostgreSQL</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div>
          <h4>Heroku</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div>
          <h4>PyCharm</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
         <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div>
          <h4>Atom</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div>
          <h4>Postman</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          </div>
          
        
        </div>
        <div className="experience__frontend">
          <h3>Libraries/Frameworks</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Spring Boot, MVC</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>NodeJs</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div><h4>MongoDB</h4>
            <small className='text-light'>Basic</small></div>
            </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
