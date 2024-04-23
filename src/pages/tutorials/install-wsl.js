import Layout from '@/components/layout/Layout';
import styles from '@/styles/tutorials/InstallWSL.module.css';

export default function InstallWSL2() {
    return (
            <div className={styles.container}>
                <h1 className={styles.heading}>How to Install WSL2 on Your PC</h1>
                <p className={styles.instructions}>Follow these steps to install WSL2 on your Windows 10 or Windows 11 computer.</p>
                
                <h2 className={styles.stepTitle}>Step 1: Enable the Windows Subsystem for Linux</h2>
                <p className={styles.instructions}>Open PowerShell as Administrator and run:</p>
                <code className={styles.codeBlock}>dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart</code>

                <h2 className={styles.stepTitle}>Step 2: Check Requirements for Virtual Machine Platform</h2>
                <p className={styles.instructions}>Ensure your PC meets the requirements for running the Virtual Machine Platform.</p>

                <h2 className={styles.stepTitle}>Step 3: Enable Virtual Machine Feature</h2>
                <p className={styles.instructions}>In the same PowerShell window, run:</p>
                <code className={styles.codeBlock}>dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart</code>

                <h2 className={styles.stepTitle}>Step 4: Download the Linux Kernel Update Package</h2>
                <p className={styles.instructions}>Download and install the WSL2 Linux kernel update package from Microsoft&apos;s official website.</p>

                <h2 className={styles.stepTitle}>Step 5: Set WSL2 as Your Default Version</h2>
                <p className={styles.instructions}>Open PowerShell and run:</p>
                <code className={styles.codeBlock}>wsl --set-default-version 2</code>

                <h2 className={styles.stepTitle}>Step 6: Install Your Linux Distribution of Choice</h2>
                <p className={styles.instructions}>Open the Microsoft Store, select your favorite Linux distribution, and click &quot;Install&quot;.</p>

                <p className={styles.finalNote}>After installation, launch your Linux distribution by clicking the &quot;Launch&quot; button, or by searching for your distribution name in the start menu.</p>
            </div>
    );
}
