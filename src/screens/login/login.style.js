import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },
    containerLogo: {
        marginTop: 50,
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 40
    },
    containerInput: {
        marginBottom: 15
    },
    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    footerLink: {
        color: COLORS.blue
    }

}