import { Column, Entity, Index, OneToMany } from "typeorm";
import { Skp } from "./Skp";
import { SkpOpBersama } from "./SkpOpBersama";
import { Sppt } from "./Sppt";

@Index("kelas_bangunan_pkey", ["kdKlsBng", "thnAwalKlsBng"], { unique: true })
@Entity("kelas_bangunan", { schema: "public" })
export class KelasBangunan {
  @Column("character", { primary: true, name: "kd_kls_bng", length: 3 })
  kdKlsBng!: string;

  @Column("character", { primary: true, name: "thn_awal_kls_bng", length: 4 })
  thnAwalKlsBng!: string;

  @Column("character", { name: "thn_akhir_kls_bng", length: 4 })
  thnAkhirKlsBng!: string;

  @Column("numeric", { name: "nilai_min_bng", precision: 8, scale: 2 })
  nilaiMinBng!: string;

  @Column("numeric", { name: "nilai_max_bng", precision: 8, scale: 2 })
  nilaiMaxBng!: string;

  @Column("numeric", { name: "nilai_per_m2_bng", precision: 8, scale: 2 })
  nilaiPerM2Bng!: string;

  @OneToMany(() => Skp, (skp) => skp.kelasBangunan)
  skps!: Skp[];

  @OneToMany(() => SkpOpBersama, (skpOpBersama) => skpOpBersama.kelasBangunan)
  skpOpBersamas!: SkpOpBersama[];

  @OneToMany(() => Sppt, (sppt) => sppt.kelasBangunan)
  sppts!: Sppt[];
}
