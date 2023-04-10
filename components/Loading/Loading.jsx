import classes from "./Loading.module.css"

export const Loading = () => {
    return (
        <div className={classes.loading_screen}>
            {/* <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div> */}
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_Q7WY7CfUco.json" background="transparent" speed="1.2" style={{ width: "300px", height: "300px" }} loop autoplay></lottie-player>
        </div>
    );
};