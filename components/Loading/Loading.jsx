import classes from "./Loading.module.css"

export const Loading = () => {
    return (
        <div className={classes.loading_screen}>
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_t9gkkhz4.json" background="transparent" speed="1.3" style={{ width: "800px", height: "800px" }} autoplay></lottie-player>
        </div>
    );

};