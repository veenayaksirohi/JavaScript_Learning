# sync-notes.ps1 - Watches a source file and copies its content to a destination file on change.

# --- Configuration ---
$sourceFile = "javascript_notes.md"
$destinationFile = "README.md"
# ---------------------

# Get the full path of the files
$sourcePath = (Resolve-Path $sourceFile).Path
$destinationPath = (Resolve-Path $destinationFile).Path
$folderToWatch = Split-Path -Parent -Path $sourcePath

# Create a FileSystemWatcher object
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $folderToWatch
$watcher.Filter = $sourceFile
$watcher.NotifyFilter = [System.IO.NotifyFilters]'LastWrite'

# Define the action to take when a change is detected
$action = {
    $path = $event.SourceEventArgs.FullPath
    $changeType = $event.SourceEventArgs.ChangeType
    Write-Host "Change detected in '$path' ($changeType) at $(Get-Date)"
    Write-Host "Syncing content to '$destinationPath'..."
    try {
        Copy-Item -Path $sourcePath -Destination $destinationPath -Force -ErrorAction Stop
        Write-Host "✅ Sync successful."
    } catch {
        Write-Host "❌ ERROR: Failed to copy file. $_"
    }
}

# Register the event handler
Register-ObjectEvent -InputObject $watcher -EventName "Changed" -Action $action

# --- Instructions to run ---
Write-Host "Watching '$sourcePath' for changes."
Write-Host "Any saved change will be copied to '$destinationPath'."
Write-Host "Press CTRL+C to stop the script."

# Keep the script running
while ($true) {
    Wait-Event -Timeout 1
} 