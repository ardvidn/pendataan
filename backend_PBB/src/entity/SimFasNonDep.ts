import { Column, Entity, Index } from "typeorm";

@Index("sim_fas_non_dep_pkey", ["kdDati2", "kdFasilitas", "kdPropinsi", "simThnNonDep"], { unique: true })
@Entity("sim_fas_non_dep", { schema: "public" })
export class SimFasNonDep {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_non_dep", length: 4 })
  simThnNonDep!: string;

  @Column("character", { primary: true, name: "kd_fasilitas", length: 2 })
  kdFasilitas!: string;

  @Column("numeric", { name: "sim_nilai_non_dep", precision: 10, scale: 2 })
  simNilaiNonDep!: string;
}
