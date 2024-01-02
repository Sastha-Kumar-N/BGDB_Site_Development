#!/bin/bash

# Use whiptail to create a dialog for user input
fasta_location=$(whiptail --inputbox "Enter the path to the FASTA file:" 10 50 3>&1 1>&2 2>&3)

# Check if the user pressed Cancel or entered an empty path
if [ -z "$fasta_location" ]; then
    whiptail --msgbox "Operation canceled. No input provided." 10 50
    exit 1
fi

# Check if the FASTA file exists
if [ ! -f "$fasta_location" ]; then
    whiptail --msgbox "Error: The specified FASTA file does not exist." 10 50
    exit 1
fi

# Path to the JBrowse script
jbrowse_script="/var/www/html/bgdb/tools/jbrowse/bin/prepare-refseqs.pl"

# Call the JBrowse script with the provided FASTA file
$jbrowse_script --fasta "$fasta_location"

# Check the exit status of the last command
if [ $? -eq 0 ]; then
    whiptail --msgbox "JBrowse data preparation successful!" 10 50
else
    whiptail --msgbox "Error: JBrowse data preparation failed." 10 50
fi
