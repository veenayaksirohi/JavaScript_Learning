/**
 * chaiaurcode.js - Keyboard Event Tracker
 *
 * This script listens for keypress events and displays key information in a table format.
 * Special handling is included for the space bar.
 *
 * Usage:
 * - Press any key to see its value, key code, and code displayed in a table.
 * - The display updates in real-time as keys are pressed.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Get the container element where keyboard information will be displayed
const div = document.getElementById('insert');

/**
 * Event listener for keypress events on the window.
 * Captures keyboard input and displays key information in a table format.
 */
window.addEventListener('keypress', function(e) {
    /**
     * Checks if the pressed key is a space and returns appropriate display text.
     * @returns {string} 'SPace_Bar' for space key, otherwise the actual key value.
     */
    const spaceCheck = () => {
        if (e.key === ' ') {
            return 'SPace_Bar'; // Display 'SPace_Bar' instead of empty space
        }
        return e.key; // Return the actual key for all other keys
    };

    // Update the container with a table showing keyboard information
    div.innerHTML = `
        <table>
            <tr>
                <th>KEY</th>
                <th>KEY_CODE</th>
                <th>CODE</th>
            </tr>
            <tr>
                <td>${spaceCheck()}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `;
    console.log('Key pressed:', spaceCheck(), 'KeyCode:', e.keyCode, 'Code:', e.code);
    console.log('==================================================================');
});
// ==================================================================
