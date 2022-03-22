package com.company;
import com.company.Commands.*;
import com.company.CustomConsoleLineModule.CommandProcessor;
import com.company.SqrtDecompositions.SqrtDecompos;
import com.company.CustomConsoleLineModule.Command;

import java.util.Map;

public class Main {
    private Map<String, Command> commands;
    private static CommandProcessor cp=null;
    private static SqrtDecompos SqrtDec=null;
    public static void main(String[] args) {
        InitCommandLine();
        cp.execute();
    }
    private static void InitCommandLine(){
        cp = new CommandProcessor("Cp1251");
        SqrtDec = new SqrtDecompos();
        Initialization Init=new Initialization();
        Filling Fill=new Filling();
        Print Print=new Print();
        Random Random=new  Random();
        SearchMin Search=new SearchMin();
        FillInterval FillIn=new FillInterval();
        SumInterval SumIn=new SumInterval();

        Init.SqrtDecompos=SqrtDec;
        Fill.SqrtDecompos=SqrtDec;
        Print.SqrtDecompos=SqrtDec;
        Random.SqrtDecompos=SqrtDec;
        Search.SqrtDecompos=SqrtDec;
        FillIn.SqrtDecompos=SqrtDec;
        SumIn.SqrtDecompos=SqrtDec;

        Command cmd = Init;
        cp.commands.put(cmd.getName(), cmd);
        cmd = Fill;
        cp.commands.put(cmd.getName(), cmd);
        cmd = Print;
        cp.commands.put(cmd.getName(), cmd);
        cmd = Random;
        cp.commands.put(cmd.getName(), cmd);
        cmd = Search;
        cp.commands.put(cmd.getName(), cmd);
        cmd = FillIn;
        cp.commands.put(cmd.getName(), cmd);
        cmd = SumIn;
        cp.commands.put(cmd.getName(), cmd);
    }
}

