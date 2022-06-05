using System;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using VRageMath;
using VRage.Game;
using Sandbox.ModAPI.Interfaces;
using Sandbox.ModAPI.Ingame;
using Sandbox.Game.EntityComponents;
using VRage.Game.Components;
using VRage.Collections;
using VRage.Game.ObjectBuilders.Definitions;
using VRage.Game.ModAPI.Ingame;
using SpaceEngineers.Game.ModAPI.Ingame;

public sealed class Program : MyGridProgram
{
    const string NameCockpit = "Cockpit";
    const string NameRotorA = "Base";
    const string NameRotorB1 = "HingeB1";
    const string NameRotorB2 = "HingeB2";
    const string NameRotorC = "Peak";
    const string NameRotorR = "BaseRotor";

    IMyCockpit cockpit;
    IMyMotorStator rotorA,rotorB1,rotorB2,rotorC,rotorR;
    public Program()
    {
        cockpit = GridTerminalSystem.GetBlockWithName(NameCockpit) as IMyCockpit;
        rotorA = GridTerminalSystem.GetBlockWithName(NameRotorA) as IMyMotorStator;
        rotorB1 = GridTerminalSystem.GetBlockWithName(NameRotorB1) as IMyMotorStator;
        rotorB2 = GridTerminalSystem.GetBlockWithName(NameRotorB2) as IMyMotorStator;
        rotorC = GridTerminalSystem.GetBlockWithName(NameRotorC) as IMyMotorStator;
        rotorR = GridTerminalSystem.GetBlockWithName(NameRotorR) as IMyMotorStator;
        rotorR = GridTerminalSystem.GetBlockWithName(NameRotorR) as IMyMotorStator;
        Runtime.UpdateFrequency = UpdateFrequency.Update1;

    }

    public void Main(string args)
    {
        Vector3D AC = rotorC.GetPosition() - rotorA.GetPosition();
        Vector3D AB1 = rotorB1.GetPosition() - rotorA.GetPosition();
        Vector3D B2C = rotorC.GetPosition() - rotorB2.GetPosition();
        Vector3D upNinge = rotorB2.GetPosition() - rotorB1.GetPosition();

        double x = AC.Length();
        double b = AB1.Length();
        double a = B2C.Length();
        double upNingeLen = upNinge.Length();

        double BaseAngle = Math.Acos(Vector3D.Normalize(AC).Dot(cockpit.WorldMatrix.Up));

        double vP = +cockpit.MoveIndicator.Z * Math.Sin(BaseAngle) - cockpit.MoveIndicator.Y * Math.Cos(BaseAngle);
        double vR = (-cockpit.MoveIndicator.Z * Math.Cos(BaseAngle) - cockpit.MoveIndicator.Y * Math.Sin(BaseAngle)) / x;

        double x2 = x * x;
        double b2 = b * b;
        double a2 = a * a;

        double B1 = ((x2 + a2 - b2))/ (2 * a * x);
        double dB1 = 0;
        if (Math.Abs(B1)<1)
            dB1 = Math.PI - Math.Acos(B1);

        double B2 = ((x2 + a2 - b2)) / (2 * a * x);
        double dB2 = 0;
        if (Math.Abs(B2) < 1)
            dB2 = Math.PI - Math.Acos(B2);

        double sq = 1 - Math.Pow(a2 + b2 - x2, 2) / (4 * a2 * b2);
        double rotBV = 0;
        if (sq > 0) rotBV = x / (a * b * Math.Sqrt(sq)) * vP;

        double sq2 = 1 - Math.Pow(-a2 + b2 + x2, 2) / (4 * x2 * b2);
        double rotAV = 0;
        if (sq2 > 0) rotAV = (-(x2 + a2 - b2) / (2 * x2 * b * Math.Sqrt(sq2))) * vP ;

        double bDiff = (dB1 - dB2) * 1.0f;
        if(cockpit.MoveIndicator.LengthSquared() + Math.Abs(cockpit.RollIndicator) > 0)
        {
            rotorA.TargetVelocityRad = (float)(rotAV + vR);
            rotorB1.TargetVelocityRad = (float)((rotAV)- bDiff);
            rotorB2.TargetVelocityRad = (float)((rotBV)+ bDiff);
            rotorC.TargetVelocityRad = (float)(vR - rotBV+cockpit.RollIndicator*0.25f);
            rotorR.TargetVelocityRad = cockpit.MoveIndicator.X;
        }
        else
        {
            rotorA.TargetVelocityRad = 0f;
            rotorB1.TargetVelocityRad = 0f;
            rotorB2.TargetVelocityRad = 0f;
            rotorR.TargetVelocityRad = 0f;
            rotorC.TargetVelocityRad = 0f;
        }
        String panelText = "";
        panelText = "Resources ( raw / ingot ) :\n";

        panelText +=  "RotorA : " + rotorA.TargetVelocityRad.ToString() +"\n";

        panelText += "RotorB1 : " + rotorB1.TargetVelocityRad.ToString() + "\n";

        panelText += "RotorB2 : " + rotorB2.TargetVelocityRad.ToString() + "\n";
        panelText += "RotorC : " + rotorC.TargetVelocityRad.ToString() + "\n";

        cockpit.GetSurface(0).WriteText(panelText)
    }

    public void Save()
    {

    }
}