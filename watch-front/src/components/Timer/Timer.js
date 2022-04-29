
import React, { useEffect, useRef, useState } from 'react'
import styles from '../Timer/Timer.module.scss'

const Timer = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('November 1, 2022 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                /////
            } else {
                setTimerDays(days < 10 ? '0' + days : days)
                setTimerHours(hours < 10 ? '0' + hours : hours)
                setTimerMinutes(minutes < 10 ? '0' + minutes : minutes)
                setTimerSeconds(seconds < 10 ? '0' + seconds : seconds)
            }

        }, 1000)
    }


    useEffect(() => {
        startTimer()
    }, [
        // timerDays, timerHours,timerMinutes, timerSeconds
     ])


    return (
        <div className={styles.timer}>
            <h6 className={styles.timerTitle}>Free Delivery</h6>

            <div className={styles.timerTime}>
                <span className={styles.timerItem}>{timerDays}:</span>
                <span className={styles.timerItem}>{timerHours}:</span>
                <span className={styles.timerItem}>{timerSeconds}:</span>
                <span className={styles.timerItem}>{timerMinutes}</span>
            </div>

            <div className={styles.timerText}>
                <span className={styles.timerTextInfo}>day</span>
                <span className={styles.timerTextInfo}>hrs</span>
                <span className={styles.timerTextInfo}>min</span>
                <span className={styles.timerTextInfo}>sec</span>
            </div>





        </div>
    )


}


export default Timer