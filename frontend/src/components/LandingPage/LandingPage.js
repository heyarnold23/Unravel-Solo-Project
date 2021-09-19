import styles from './LandingPage.module.css'
import SongChart from "../SongChart";

export const LandingPage = () => {
    return (
        <>
            <div className={styles.panelsContainer}>
                <div className={styles.panel} style={{ backgroundImage: `url(https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fkanye-west-donda-jay-z-travis-scott-lil-baby-fan-reactions-001.jpg?q=90&w=1400&cbr=1&fit=max)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className={styles.panelSong}>
                        Jail
                    </div>
                    <div className={styles.by}>
                        by
                    </div>
                    <div className={styles.by}>
                        Kanye West
                    </div>
                </div>
                <div className={styles.panel} style={{ backgroundImage: `url(https://dancingastro-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/silk-sonic.jpeg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className={styles.panelSong}>
                        Skate
                    </div>
                    <div className={styles.by}>
                        by
                    </div>
                    <div className={styles.by}>
                        Silk Sonic
                    </div>
                </div>
                <div className={styles.panel} style={{ backgroundImage: `url(https://video-images.vice.com/articles/5f89ab1da770a90095459896/lede/1603103753506-361ledeimagesartboard-1.png?crop=1xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className={styles.panelSong}>
                        Family Ties
                    </div>
                    <div className={styles.by}>
                        by
                    </div>
                    <div className={styles.by}>
                        Baby Keem
                    </div>
                </div>
                <div className={styles.panel} style={{ backgroundImage: `url(https://dailynexus.s3.us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2021/01/06185511/drake-certified-lover-boy.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className={styles.panelSong}>
                        Champagne Poetry
                    </div>
                    <div className={styles.by}>
                        by
                    </div>
                    <div className={styles.by}>
                        Drake
                    </div>
                </div>
                <div className={styles.panel} style={{ backgroundImage: `url(https://www.rollingstone.com/wp-content/uploads/2020/11/weeknd-reacts.jpg?resize=1800,1200&w=1200)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className={styles.panelSong}>
                        Take My Breath
                    </div>
                    <div className={styles.by}>
                        by
                    </div>
                    <div className={styles.by}>
                        The Weeknd
                    </div>
                </div>
            </div>
            <div>
            <SongChart />
            </div>
        </>
    );
}
