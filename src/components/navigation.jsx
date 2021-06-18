export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container' style={{marginright:70}}>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Penny Xu
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
          style={{marginLeft:70}}
        >
          <ul className='nav navbar-nav navbar-right' style={{marginLeft:70}}>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Home Search
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <a href="//wiki.pennyxuhomes.com">
                Wiki
              </a>
            </li>
            <li style={{marginBottom:0}}>
              <div style={{marginTop:16}}>
              <a style={{border: '2px solid black', padding: "11.4px 12px"}}>
              <span>
                  <i className='fa fa-phone'></i>
                </span>{' '}
                408.889.9424
              </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
