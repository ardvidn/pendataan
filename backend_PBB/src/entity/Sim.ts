import { Column, Entity, Index } from "typeorm";

@Index("penduduk_sim_fk", ["noPenduduk"], {})
@Index("sim_pkey", ["noSim"], { unique: true })
@Entity("sim", { schema: "public" })
export class Sim {
  @Column("character", { primary: true, name: "no_sim", length: 30 })
  noSim!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;
}
