import { Column, Entity, Index } from "typeorm";

@Index("sim_fas_dep_min_max_pkey", ["kdDati2", "kdFasilitas", "kdPropinsi", "simKlsDepMax", "simKlsDepMin", "simThnDepMinMax"], { unique: true })
@Entity("sim_fas_dep_min_max", { schema: "public" })
export class SimFasDepMinMax {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_dep_min_max",
    length: 4,
  })
  simThnDepMinMax!: string;

  @Column("character", { primary: true, name: "kd_fasilitas", length: 2 })
  kdFasilitas!: string;

  @Column("integer", { primary: true, name: "sim_kls_dep_min" })
  simKlsDepMin!: number;

  @Column("integer", { primary: true, name: "sim_kls_dep_max" })
  simKlsDepMax!: number;

  @Column("numeric", { name: "sim_nilai_dep_min_max", precision: 10, scale: 2 })
  simNilaiDepMinMax!: string;
}
