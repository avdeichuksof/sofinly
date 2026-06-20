import './home.css'
import PostIt from '../../components/post-it/post-it'
import BalanceCard from '../../components/balance-card/balance-card'

export default function Home({user}: {user: string}) {
    const date = new Date()
    const day = date.getDate()
    const month = date.toLocaleString('default', {month: 'long'})
    const year = date.getFullYear()

    return (
        <div id="home">
            <div className="welcome">
                <h1 className="home-title">Hola, {user}</h1>
            <p className='home-date'>{day} de {month} • {year}</p>
            </div>
            <div className="home-data">
                <BalanceCard />
                <PostIt />
            </div>
        </div>
    )
}

