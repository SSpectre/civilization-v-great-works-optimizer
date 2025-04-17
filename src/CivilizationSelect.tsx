export default function CivilizationSelect({name}: Readonly<{name: string}>) {
    return (
        <select name={name} id={name}>
            <option value="american">American</option>
            <option value="arabian">Arabian</option>
            <option value="assyrian">Assyrian</option>
            <option value="austrian">Austrian</option>
            <option value="aztec">Aztec</option>
            <option value="babylonian">Babylonian</option>
            <option value="brazilian">Brazilian</option>
            <option value="byzantine">Byzantine</option>
            <option value="carthaginian">Carthaginian</option>
            <option value="celtic">Celtic</option>
            <option value="chinese">Chinese</option>
            <option value="danish">Danish</option>
            <option value="dutch">Dutch</option>
            <option value="egyptian">Egyptian</option>
            <option value="english">English</option>
            <option value="ethiopian">Ethiopian</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="greek">Greek</option>
            <option value="hunnic">Hunnic</option>
            <option value="incan">Incan</option>
            <option value="indian">Indian</option>
            <option value="indonesian">Indonesian</option>
            <option value="iroquois">Iroquois</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="mayan">Mayan</option>
            <option value="mongolian">Mongolian</option>
            <option value="moroccan">Moroccan</option>
            <option value="ottoman">Ottoman</option>
            <option value="persian">Persian</option>
            <option value="polish">Polish</option>
            <option value="polynesian">Polynesian</option>
            <option value="portuguese">Portuguese</option>
            <option value="roman">Roman</option>
            <option value="russian">Russian</option>
            <option value="shoshone">Shoshone</option>
            <option value="siamese">Siamese</option>
            <option value="songhai">Songhai</option>
            <option value="spanish">Spanish</option>
            <option value="swedish">Swedish</option>
            <option value="venetian">Venetian</option>
            <option value="zulu">Zulu</option>
        </select>
    );
}