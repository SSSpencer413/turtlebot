//SSSpencer413

const fs = require('fs');


exports.run = async (Client, interaction) => {
    // Only admins can set up the server
    if (interaction.member.permissions.has("ADMINISTRATOR")) {
        // Try to find any option to reset the current commands
        if (interaction.options.getBoolean("reset") == true) {
            interaction.guild.commands.fetch()
            .then((commands) => {
                commands.each((cmd) => cmd.delete());
            })
            .catch(console.error);

            interaction.reply({ content: 'Reset commands'});

        } else {
            
            interaction.reply({ content: 'Setup complete!'});
        }
    } else {
        interaction.reply({ content: 'You must be an administrator to use this command!', ephemeral: true});
    }
};