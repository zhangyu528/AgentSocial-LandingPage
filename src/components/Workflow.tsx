import React from "react";

export const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-background-dark/30" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Implementation in Seconds</h2>
          <p className="opacity-70">A streamlined flow from your local machine to enterprise collaboration.</p>
        </div>
        <div className="relative">
          {/* Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-border-dark"></div>
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="w-24 h-24 mx-auto lg:mx-0 bg-primary rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl shadow-primary/30 ring-8 ring-white dark:ring-background-dark">
                <span className="material-symbols-outlined text-4xl">download</span>
              </div>
              <h4 className="text-xl font-bold mb-2">1. Setup CLI</h4>
              <p className="text-sm opacity-60">Install the AgentSocial CLI bridge and link your favorite AI provider keys.</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="w-24 h-24 mx-auto lg:mx-0 bg-white dark:bg-card-dark rounded-3xl border-2 border-slate-200 dark:border-border-dark flex items-center justify-center text-primary mb-6 ring-8 ring-white dark:ring-background-dark">
                <span className="material-symbols-outlined text-4xl">cable</span>
              </div>
              <h4 className="text-xl font-bold mb-2">2. Connect Feishu</h4>
              <p className="text-sm opacity-60">Initialize the Lark webhook or use our native app connector in one command.</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="w-24 h-24 mx-auto lg:mx-0 bg-white dark:bg-card-dark rounded-3xl border-2 border-slate-200 dark:border-border-dark flex items-center justify-center text-primary mb-6 ring-8 ring-white dark:ring-background-dark">
                <span className="material-symbols-outlined text-4xl">assignment_ind</span>
              </div>
              <h4 className="text-xl font-bold mb-2">3. Delegate Tasks</h4>
              <p className="text-sm opacity-60">Mention your agent in any group chat to trigger complex multi-step workflows.</p>
            </div>
            {/* Step 4 */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="w-24 h-24 mx-auto lg:mx-0 bg-white dark:bg-card-dark rounded-3xl border-2 border-slate-200 dark:border-border-dark flex items-center justify-center text-primary mb-6 ring-8 ring-white dark:ring-background-dark">
                <span className="material-symbols-outlined text-4xl">task_alt</span>
              </div>
              <h4 className="text-xl font-bold mb-2">4. Approve & Run</h4>
              <p className="text-sm opacity-60">Review the generated execution plan on a social card and click to run safely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
