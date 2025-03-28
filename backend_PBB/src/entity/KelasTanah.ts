import { Column, Entity, Index, OneToMany } from "typeorm";
import { Skp } from "./Skp";
import { SkpOpBersama } from "./SkpOpBersama";
import { Sppt } from "./Sppt";

@Index("kelas_tanah_pkey", ["kdKlsTanah", "thnAwalKlsTanah"], { unique: true })
@Entity("kelas_tanah", { schema: "public" })
export class KelasTanah {
  @Column("character", { primary: true, name: "kd_kls_tanah", length: 3 })
  kdKlsTanah!: string;

  @Column("character", { primary: true, name: "thn_awal_kls_tanah", length: 4 })
  thnAwalKlsTanah!: string;

  @Column("character", { name: "thn_akhir_kls_tanah", length: 4 })
  thnAkhirKlsTanah!: string;

  @Column("numeric", { name: "nilai_min_tanah", precision: 8, scale: 2 })
  nilaiMinTanah!: string;

  @Column("numeric", { name: "nilai_max_tanah", precision: 8, scale: 2 })
  nilaiMaxTanah!: string;

  @Column("numeric", { name: "nilai_per_m2_tanah", precision: 8, scale: 2 })
  nilaiPerM2Tanah!: string;

  @OneToMany(() => Skp, (skp) => skp.kelasTanah)
  skps!: Skp[];

  @OneToMany(() => SkpOpBersama, (skpOpBersama) => skpOpBersama.kelasTanah)
  skpOpBersamas!: SkpOpBersama[];

  @OneToMany(() => Sppt, (sppt) => sppt.kelasTanah)
  sppts!: Sppt[];
}
