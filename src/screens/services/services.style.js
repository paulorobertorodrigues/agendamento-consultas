import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        marginTop:30,
        flex: 1,
        backgroundColor: COLORS.white,
    },
    banner: {
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 25
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 5
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.white,
        marginTop: 3
    }
}