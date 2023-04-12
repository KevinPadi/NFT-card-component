import './styles.css'

export function  App () {
  return(
    <div className="cntr">
      <div className="img-cntr">
          <img className='img' src="./images/image-equilibrium.jpg" alt="equilibrium nft image" />
          <div>
            <img className='icon-view' src="/icons/icon-view.svg" alt="icon view" />
          </div>
      </div>
      <main className="main-cntr">
        <h4 className="title">Equilibrium #3429</h4>
        <p className="main-text">Our Equilibrium collection promotes balance and calm</p>
        <div className="card-info">
          <div className='left-text'>
            <img src="icons/icon-ethereum.svg" alt="" />
            <span className="money-text">0.041 ETH</span>
          </div>
          <div className='right-text'>
            <img src="icons/icon-clock.svg" alt="" />
            <span className="time-text">3 days left</span>
          </div>
        </div>
      </main>
      <hr />
      <footer className='footer'>
        <img className="avatar" src="../images/image-avatar.png" alt="avatar" />
        <span className="footer-text">Creation of <span className="footer-text-name">Jules Wyvern</span>
        </span>
      </footer>
    </div>
  )
}