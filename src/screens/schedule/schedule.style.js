import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        marginBottom: 20
    },
    logo: {
        marginTop:80,
        marginLeft:50,
        width: 200,
        height: 40
    },
    theme: {
        todayTextColor: COLORS.red,
        selectedDayBackgroundColor: COLORS.blue,
        selectedDayTextColor: COLORS.white,
        arrowColor: COLORS.blue
    },
    textHour: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.gray2,
        marginTop: 20
    }
}