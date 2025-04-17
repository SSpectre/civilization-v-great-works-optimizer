export default function City({cityNumber}: Readonly<{cityNumber: number}>) {
    return(
        <tr>
            <td>
                <input type="text" id={"city-" + cityNumber} name={"city-" + cityNumber} placeholder={"City " + cityNumber} />
            </td>
            <td>
                <input type="radio" id={"national-epic-radio-" + cityNumber} name="national-epic-radio" />
            </td>
            <td>
                <input type="radio" id={"heroic-epic-radio-" + cityNumber} name="heroic-epic-radio" />
            </td>
            <td>
                <input type="radio" id={"great-library-radio-" + cityNumber} name="great-library-radio" />
            </td>
            <td>
                <input type="radio" id={"oxford-university-radio-" + cityNumber} name="oxford-university-radio" />
            </td>
            <td>
                <input type="radio" id={"globe-theatre-radio-" + cityNumber} name="globe-theatre-radio" />
            </td>
            <td>
                <input type="radio" id={"palace-radio-" + cityNumber} name="palace-radio" />
            </td>
            <td>
                <input type="radio" id={"parthenon-radio-" + cityNumber} name="parthenon-radio" />
            </td>
            <td>
                <input type="radio" id={"sistine-chapel-radio-" + cityNumber} name="sistine-chapel-radio" />
            </td>
            <td>
                <input type="radio" id={"uffizi-radio-" + cityNumber} name="uffizi-radio" />
            </td>
            <td>
                <input type="radio" id={"hermitage-radio-" + cityNumber} name="hermitage-radio" />
            </td>
            <td>
                <input type="radio" id={"louvre-radio-" + cityNumber} name="louvre-radio" />
            </td>
            <td>
                <input type="radio" id={"broadway-radio-" + cityNumber} name="broadway-radio" />
            </td>
            <td>
                <input type="radio" id={"sydney-opera-house-radio-" + cityNumber} name="sydney-opera-house-radio" />
            </td>
            <td>
                <input type="checkbox" id={"royal-library-check-" + cityNumber} name={"royal-library-check-" + cityNumber} />
            </td>
            <td>
                <input type="checkbox" id={"amphitheater-check-" + cityNumber} name={"amphitheater-check-" + cityNumber} />
            </td>
            <td>
                <input type="checkbox" id={"cathedral-check-" + cityNumber} name={"cathedral-check-" + cityNumber} />
            </td>
            <td>
                <input type="checkbox" id={"museum-check-" + cityNumber} name={"museum-check-" + cityNumber} />
            </td>
            <td>
                <input type="checkbox" id={"opera-house-check-" + cityNumber} name={"opera-house-check-" + cityNumber} />
            </td>
            <td>
                <input type="checkbox" id={"broadcast-tower-check-" + cityNumber} name={"broadcast-tower-check-" + cityNumber} />
            </td>
            <td>
                <input type="checkbox" id={"hotel-check-" + cityNumber} name={"hotel-check-" + cityNumber} />
            </td>
            <td>
                <input type="checkbox" id={"airport-check-" + cityNumber} name={"airport-check-" + cityNumber} />
            </td>
            <td>
                <input type="checkbox" id={"national-visitor-center-check-" + cityNumber} name={"national-visitor-center-check-" + cityNumber} />
            </td>
        </tr>
    );
}