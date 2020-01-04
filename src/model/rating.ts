
abstract class Rating {
    private bipolar: boolean;
    private value: number;

    public abstract copy(): Rating;
}
