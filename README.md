<h1>Command-Handler</h1>

<h3>What is Command Handler?</h3>
<p>A command handler is a design pattern or component that helps manage and organize the code responsible for handling different commands that users might issue to your bot in a Discord server.A command handler helps you keep your code organized and maintainable, especially as the number of commands your bot offers increases. Instead of having a single monolithic file with all the command logic, a command handler allows you to modularize the codebase and separate each command's functionality into its own file.<br></br>Below is a basic outlining of a command handler:</p>
<li>Command Handling Logic: The bot listens for messages and checks if they match the command prefix. If they do, it  extracts the command and any arguments provided.</li>
<li>Command Modules: Each command is organized into its own module or file. For example, you might have separate files for help.js, ping.js, kick.js, etc., each containing the logic for their respective commands.</li>
<li>Centralized Handling: The command handler acts as a central hub that routes incoming messages to the appropriate command module based on the extracted command. It dynamically loads and executes the corresponding command module.</li>
<li>Dynamic Loading: Using the command handler, you can dynamically load and execute the appropriate command module without having to hardcode each individual command's logic.</li>

<h3>How to use this code?</h3>
<p>If you are using this code, then ensure that the folder you have created is named 'Commands' or else your code will not work. You also need to addd your desired prefix which can cointain numbers, letter, symbols or a combination of all but ensure that it does not contain any spaces. Your prefix is totally up to you, it can even contains uppercase letters. There will also be comments on the .js files, so that you can understand and customise. </p>

<h3>Credits: </h3>
<li><a href = "https://youtu.be/1KVGyUemRy0">Video</a> by <a href = "https://github.com/ImagineGamingPlay">@ImaginGamingPlay</a> -- Note that this in in v13, whereareas the above code is in v14</li>
