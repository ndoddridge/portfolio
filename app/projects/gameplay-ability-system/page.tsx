export default function GameplayAbilitySystem() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-medium mt-10 mb-3">
          Feature-Driven Game Flow System
        </h2>

        <p className="text-sm text-gray-300 max-w-prose">
          A modular gameplay ability system designed to support player-facing
          mechanics with clear lifecycles, state restrictions, cooldowns, and
          animation-driven timing. This project focuses on clean architecture,
          extensibility, and production-style decision making.
        </p>

        <h2>Goals</h2>
        <ul>
          <li>Support reusable, data-driven gameplay abilities</li>
          <li>Separate ability logic from input, UI, and presentation</li>
          <li>Handle cooldowns, interruptions, and gameplay state restrictions</li>
          <li>Enable animation-driven ability timing</li>
        </ul>

        <h2>Core System Design</h2>
        <p>
          The system is centered around an <strong>AbilityManager</strong> that
          owns equipped abilities and controls activation, lifecycle updates, and
          cooldown tracking. Individual abilities implement a shared base
          interface and remain unaware of input or UI concerns.
        </p>

        <h3>Ability Lifecycle</h3>
        <pre>
          {`Ready → Activating → Active → Cooldown → Ready`}
        </pre>

        <h2>Example Abilities</h2>
        <ul>
          <li><strong>Dash:</strong> Directional, interruptible movement ability</li>
          <li><strong>Melee Attack:</strong> Animation-driven hit window</li>
          <li><strong>Channeled Ability:</strong> Can be canceled early</li>
        </ul>

        <h2>Tech</h2>
        <p>Unity, C#</p>

        <h2>Status</h2>
        <p>In progress</p>
      </div>
    </>
  );
}