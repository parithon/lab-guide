---
title: "Installing Hyper-V"
synopsis: "Instructions on how to install Hyper-V on Windows Server 2016+ or Windows 10 (1903+)"
date: 2020-01-07
published: true
author: "Anthony Conrad"
series:
  name: "Hyper-V"
  order: 1
---

To complete the lab guides you will need a host machine running either Windows Server 2016+ or Windows 10 (1903 or later) and with the Hyper-V role/feature enabled. Follow this guide to enable the Hyper-V role/feature on your computer.

## Check Requirements

- Windows Server 2016+ or Windows 10 Enterprise, Pro, or Education<br/>
  Note: Windows Home is not supported and the Hyper-V feature cannot be enabled
- A 64-bit processor with Second Level Address Translation (SLAT) support
- A processor that supports VM Monitor Mode Extensions, either VT-x (Intel) or AMD-V (AMD)

### Checking your computer for SLAT and VM Monitor Mode support

You can check to ensure your computer is ready for Hyper-V by running the following PowerShell command:

Make sure that `HyperVRquirementSecondLevelAddressTranslation` and `HyperVRequirementVMMonitorModeExtensions` are both `True`.

```PowerShell
> Get-ComputerInfo
...
HyperVisorPresent                                       : False
HyperVRequirementDataExecutionPreventionAvailable       : True
HyperVRequirementSecondLevelAddressTranslation          : True
HyperVRequirementVirtualizationFirmwareEnabled          : True
HyperVRequirementVMMonitorModeExtensions                : True
...
```

## Enable Hyper-V using PowerShell

> **NOTE**: Installing Hyper-V will require a reboot

### Windows 10

```PowerShell
> Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

### Windows Server 2016+

```PowerShell
> Install-WindowsFeature -Name Hyper-V -IncludeManagementTools -Restart
```
