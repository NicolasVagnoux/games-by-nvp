type GameTitleProps = {
    text: string;
}

const GameTitle = ({ text }: GameTitleProps) => {
    return (
        <h1 className=' card mb-12 px-8 py-3 bg-sun text-center text-6xl font-fredoka font-bold -rotate-5'>
            {text}
        </h1>
    );
};

export default GameTitle;